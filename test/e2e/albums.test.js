const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Albums api', () => {

    before(() => dropCollection('albums'));

    let album1 = {
        title: 'Dogs',
        description: 'Pictures of dogs',
        imageCount: 1
    };

    let album2 = {
        title: 'Cats',
        description: 'Pictures of cats',
        imageCount: 1
    };

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    it('saves an album', () => {
        return request.post('/api/albums')
            .send(album1)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.deepEqual(body, {
                    ...album1,
                    _id, __v
                });

            });
    });
});