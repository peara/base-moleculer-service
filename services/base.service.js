'use strict';

const { MoleculerClientError, ValidationError } = require('moleculer').Errors;
const { AuthenticationError } = require('../app/helpers/errors');
const User = require('../app/models/user');

module.exports = {
    name: 'base',
    /**
     * Service settings
     */
    settings: {
    },

    /**
     * Service dependencies
     */
    // dependencies: [],

    /**
     * Actions
     */
    actions: {

        /**
         * Login with username & password
         *
         * @actions
         * @param {Object} user - User credentials
         *
         * @returns {Object} Logged in user with token
         */
        getUser: {
            params: {
                id: { type: 'number', convert: true, integer: true },
                $$strict: true
            },
            handler(ctx) {
                return User.query().findOne('id', ctx.params.id)
                    .then(data => {
                        return {
                            data
                        };
                    });
            }
        }


    },
    /**
     * Events
     */
    events: {
        'base.register'(payload) {
            this.logger.info('base register user : ', payload);
            // Update all message that have this locale to locale_id :0
            if (payload.times >= this.settings.maxRetryTime) {
                this.logger.error('base register fail ', payload);
                // After 3 times email to developer
                // TODO create mail service
                this.broker.emit('email.handle-error', { service: 'base', method: 'register', payload });
            } else {
                try {
                    // Do event handler here
                    // TODO
                    // eg : Create profile
                    // this.broker.call();
                } catch (error) {
                    this.logger.error('event base register fail: ' + error.message);
                }
            }
        }
    },

    /**
     * Methods
     */
    methods: {
    },

    /**
     * Service created lifecycle event handler
     */
    created() {
        global.Promise = this.Promise;
    },

    /**
     * Service started lifecycle event handler
     */
    started() {

    },

    /**
     * Service stopped lifecycle event handler
     */
    stopped() {

    }
};
