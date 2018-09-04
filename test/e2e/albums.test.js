const { assert } = require('chai');
const request = require('./request');
const { dropCollection  } = require('./_db');

const checkOk = res => {
    assert.equal(res.status, 200, 'expected 200 http status code');
    return res;
};

describe.only('Albums API', () => {

    before(() => dropCollection('albums'));

    let album1 = {
        title: 'Babie Evie',
        description: 'First Year'
    };

    // let album2 = {
    //     title: 'Vancouver March 2017',
    //     description: 'Birthday in the PNW'
    // };

    it('saves an album', () => {
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
});