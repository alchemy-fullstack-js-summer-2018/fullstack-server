const chai = require('chai');
const { assert } = chai;
const Images = require('../../lib/models/images');

describe('Images model', () => {

    it('validates good model', () => {
        const data = {
            // example full, good data
        };
        const images = new Images(data);

        const json = images.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(images.validateSync());
    });

});