const chai = require('chai');
const { assert } = chai;
const Image = require('../../lib/models/image');

describe('Image model', () => {

    it('validates good model', () => {
        const data = {
            // example full, good data
        };
        const image = new Image(data);

        const json = image.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(image.validateSync());
    });

});