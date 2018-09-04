const { assert } = require('chai');
const { Types } = require('mongoose');
const Image = require('../../lib/models/Image');
const { getErrors } = require('./helpers');

describe('Image model', () => {

    it('Validates a good model', () => {
        const data = {
            title: 'Maine Coon',
            description: 'A smaller, fluffy, domesticated version of the jungle cat',
            url: 'http://images.boredomfiles.com/wp-content/uploads/sites/5/2017/01/maine-coon-1-710x710.jpg'
        };

        const image = new Image(data);

        data._id = image._id;
        assert.deepEqual(image.toJSON(), data);
        assert.isUndefined(image.validateSync());
    });

    it('Required fields', () => {
        const image = new Image({});
        const errors = getErrors(image.validateSync(), 3);

        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.description.kind, 'required');
        assert.equal(errors.url.kind, 'required');
    });
});