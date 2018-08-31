const { assert } = require('chai');
const Image = require('../../lib/models/Image');
const { getErrors } = require('./helpers');

describe('Image model', () => {

    it('includes required fields', () => {
        const image = new Image({});
        const errors = getErrors(image.validateSync(), 1);
        assert.equal(errors.name.kind, 'required');
    });
});