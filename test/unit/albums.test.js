const chai = require('chai');
const { assert } = chai;
const Albums = require('../../lib/models/albums');

describe.only('Albums model', () => {

    it('validates good model', () => {
        const data = {
            title: 'Baby Evie',
            description: 'First Year'
        };
        const albums = new Albums(data);

        const json = albums.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(albums.validateSync());
    });

});