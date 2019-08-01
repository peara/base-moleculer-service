'use strict';

const { Model } = require('objection');
const CustomQueryBuilder = require('../helpers/custom_query_builder');
const knex = require('../../config/database');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get softDelete() {
        return true;
    }

    static get maxPageSize() {
        return 100;
    }

    static get selectableProps() {
        return ['id'];
    }

    static get deletedColumn() {
        return 'deleted_at';
    }

    static get QueryBuilder() {
        return CustomQueryBuilder;
    }
}
User.knex(knex);

module.exports = User;
