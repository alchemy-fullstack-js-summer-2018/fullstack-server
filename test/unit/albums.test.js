const chai = require('chai');
const { assert } = chai;
const Albums = require('../../lib/models/albums');

describe('Albums model', () => {

    it('validates good model', () => {
        const data = {
            // example full, good data
        };
        const albums = new Albums(data);

        const json = albums.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(albums.validateSync());
    });

});