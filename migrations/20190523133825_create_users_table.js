const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('email').unique().notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('status').notNullable().defaultTo('registered');
        table.string('password').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('deleted_at');
    }).then(() => knex.raw(onUpdateTrigger('users')));
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
};
