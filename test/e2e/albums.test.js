const { assert } = require('chai');
const request = require('./request');
const { dropCollection  } = require('./_db');

const checkOk = res => {
    assert.equal(res.status, 200, 'expected 200 http status code');
    return res;
};

describe.only('Albums API', () => {

    beforeEach(() => dropCollection('albums'));

    let album1 = {
        title: 'Babie Evie',
        description: 'First Year'
    };

    // let album2 = {
    //     title: 'Vancouver March 2017',
    //     description: 'Birthday in the PNW'
    // };

    beforeEach(() => {
        return request.post('/api/albums')
            .send(album1)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    _id, __v,
                    ...album1
                });
                album1 = body;
            });
    });

    it('saves an album', () => {
        assert.isOk(album1._id);
    });

    it.only('gets an album by id', () => {
        return request 
            .get(`/api/albums/${album1._id}`)
            .then(checkOk)
            .then(({ body }) => {
                console.log('album', album1);
                assert.deepEqual(body, {
                    title: album1.title,
                    description: album1.description
                });
            });
    });

    it('gets a list of albums', () => {

    });
});