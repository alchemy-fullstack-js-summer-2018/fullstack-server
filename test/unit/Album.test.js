const { assert } = require('chai');
const Album = require('../../lib/models/Album');
const { getErrors } = require('./helpers');

describe('Album model', () => {

    it('Validates a good model', () => {
        const data = {
            title: 'Animals',
            description: 'Creatures from around the world',
            thumbnail: 'https://support.worldwildlife.org/images/content/pagebuilder/257789-baby-gorilla-thumbnail.jpg'
        };

        const album = new Album(data);
        data._id = album._id;
        assert.deepEqual(album.toJSON(), data);
        assert.isUndefined(album.validateSync());
    });

    it('Required fields', () => {
        const album = new Album({});
        const errors = getErrors(album.validateSync(), 3);

        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.description.kind, 'required');
        assert.equal(errors.thumbnail.kind, 'required');
    });
});