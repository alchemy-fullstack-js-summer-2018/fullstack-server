const chai = require('chai');
const { assert } = chai;
const Users = require('../../lib/models/users');

describe('Users model', () => {

    it('validates good model', () => {
        const data = {
            // example full, good data
        };
        const users = new Users(data);

        const json = users.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(users.validateSync());
    });

});