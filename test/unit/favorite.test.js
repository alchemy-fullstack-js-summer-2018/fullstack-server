const { assert } = require('chai');
const Favorite = require('../../lib/models/favorite');

const mock = {
    title: 'Sting',
    id: 152,
    year: 1990
};

describe('Favorite model', () => {
    it('validates good model', () => {
        const favorite = new Favorite(mock);
        assert.equal(favorite.id, mock.id);
    });
});