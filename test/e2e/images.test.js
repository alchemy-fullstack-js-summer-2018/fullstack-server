// const { assert } = require('chai');
// const request = require('./request');
const { dropCollection, /* createToken */ } = require('./db');

describe('Image api', () => {

    beforeEach(() => dropCollection('images'));

    beforeEach(() => {
        // let image1 = {
        //     title: 'Maine Coon',
        //     description: 'The Maine Coon is one of the largest domesticated breeds of cat. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the state of Maine,[3] where it is the official state cat.',
        //     url: 'http://images.boredomfiles.com/wp-content/uploads/sites/5/2017/01/maine-coon-1-710x710.jpg'
        // };
    });
    
    it('Saves an image', () => {

    });
});