'use strict';

const path = require('path');

const migrations = {
    directory: path.join(__dirname, 'migrations')
};

const seeds = {
    directory: path.join(__dirname, 'seeds')
};

const baseConfig = {
    client: 'pg',
    version: '11.3',
    migrations,
    seeds
};

const connection = {
    host: 'localhost',
    user: 'super_node',
    password: 'node@node',
    database: 'property_dev',
    port: '5432'
};

module.exports = {
    development: {
        ...baseConfig,
        connection,
        pool: {
            min: 1,
            max: 3
        }
    },
    test: {
        ...baseConfig,
        connection: {
            ...connection,
            database: 'property_test'
        },
        pool: {
            min: 1,
            max: 3
        }
    },
    ci: {
        ...baseConfig,
        connection: {
            host: 'sample',
            user: 'sample_ci',
            password: 'sample_ci',
            database: 'sample_test',
            port: '5432'
        },
        pool: {
            min: 1,
            max: 3
        }
    },
    staging: {
        ...baseConfig,
        connection: {
            host: process.env.SAMPLE_DB_HOST,
            user: process.env.SAMPLE_DB_USER,
            password: process.env.SAMPLE_DB_PASSWORD,
            database: process.env.SAMPLE_DB_NAME,
            port: process.env.SAMPLE_DB_PORT
        },
        pool: {
            min: 1,
            max: 3
        }
    },
    production: {
        ...baseConfig,
        connection: {
            host: process.env.SAMPLE_DB_HOST,
            user: process.env.SAMPLE_DB_USER,
            password: process.env.SAMPLE_DB_PASSWORD,
            database: process.env.SAMPLE_DB_NAME,
            port: process.env.SAMPLE_DB_PORT
        },
        pool: {
            min: 1,
            max: 3
        }
    },
    onUpdateTrigger: table => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();`
};
