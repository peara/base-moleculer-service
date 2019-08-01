const { QueryBuilder } = require('objection');
const knex = require('../../config/database');
class CustomQueryBuilder extends QueryBuilder {
    // Some custom method.
    delete(forceDelete = false) {
        if (this.modelClass().softDelete && !forceDelete) {
            const patchData = {};
            patchData[this.modelClass().deletedColumn] = knex.fn.now();
            return this.patch(patchData);
        }
        return super.delete();
    }

    whereDeleted() {
        return this.whereNotNull(`${this.modelClass().tableName}.${this.modelClass().deletedColumn}`);
    }

    whereNotDeleted() {
        return this.whereNull(`${this.modelClass().tableName}.${this.modelClass().deletedColumn}`);
    }

    create(data, columns) {
        let cols = columns || this.modelClass().selectableProps;
        return this.insert(data).returning(cols);
    }

    updateOrInsert(model) {
        if (model.id) {
            return this.update(model).where('id', model.id);
        }
        return this.insert(model);
    }

    page(page, pageSize) {
        const maxPageSize = this.modelClass().maxPageSize;

        if (maxPageSize !== undefined && pageSize > maxPageSize) {
            return super.page(page - 1, maxPageSize);
        }
        return super.page(page - 1, pageSize);
    }
}


module.exports = CustomQueryBuilder;
