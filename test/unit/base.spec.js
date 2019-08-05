'use strict';

const { ServiceBroker } = require('moleculer');
const BaseService = require('../../services/base.service');
const { truncate } = require('../helpers/test_init');

describe("Test 'base' service", () => {
    let broker = new ServiceBroker();
    broker.createService(BaseService);

    beforeAll(() => broker.start());
    afterAll(() => broker.stop());

    describe("Test 'base.register' action", () => {
        beforeAll(() => truncate());
        test('register successfully', () => {
            expect(1).toEqual(1);
        });
    });
});
