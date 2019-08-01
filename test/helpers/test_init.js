'use strict';

const knex = require('../../config/database.js');
var tables = [
];

function truncate() {
    return Promise.all(tables.map(table => knex.raw('truncate ' + table + ' RESTART IDENTITY cascade;')));
}

module.exports = {
    truncate
};
