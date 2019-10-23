'use strict';

var tables = [
    'calendars',
    'bookings',
    'guests',
    'partners'
];

module.exports = (knex) => {
    return {
        truncate: (t = tables) => {
            return Promise.all(t.map(table => knex.raw('truncate ' + table + ' RESTART IDENTITY cascade;')));
        },

        disconnectDB: async () => {
            await knex.connection().client.pool.destroy();
        }
    };
};
