const chai = require('chai');
const { assert } = chai;
const { getErrors } = require('./helpers');
const Album = require('../../lib/models/album');

describe.only('album model', () => {

    it('validates good model', () => {
        const data = {
            title: 'Baby Evie',
            description: 'First Year'
        };
        const album = new Album(data);

        const json = album.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(album.validateSync());
    });

    it('validates required fields', () => {
        const album = new Album({});
        const errors = getErrors(album.validateSync(), 2);

        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.description.kind, 'required');
    });

});