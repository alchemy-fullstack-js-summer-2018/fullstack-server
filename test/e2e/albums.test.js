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

    let album2 = {
        title: 'Vancouver March 2017',
        description: 'Birthday in the PNW'
    };

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

    beforeEach(() => {
        return request.post('/api/albums')
            .send(album2)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    _id, __v,
                    ...album2
                });
                album2 = body;
            });
    });

    it('saves an album', () => {
        assert.isOk(album1._id);
    });

    it('gets an album by id', () => {
        return request 
            .get(`/api/albums/${album1._id}`)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, {
                    title: album1.title,
                    description: album1.description
                });
            });
    });

    it('gets all albums', () => {
        return request
            .get('/api/albums')
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [album1, album2]);
            });
    });

    it('updates an album', () => {
        album1.description = 'Baby\'s First Year!!!';
        return request
            .put(`/api/albums/${album1._id}`)
            .send(album1)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, album1);
                return request.get(`/api/albums/${album1._id}`);
            })
            .then(({ body }) => {
                assert.equal(body.description, album1.description);
            });
    });

    it('deletes an album', () => {
        return request
            .delete(`/api/albums/${album1._id}`)
            .then(() => {
                return request.get(`/api/albums/${album1._id}`);
            })
            .then(res => {
                assert.equal(res.status, 404);
            });
    });

    it.skip('returns 404 on get of non-existent id', () => {
        let album3 = {
            _id: 'abc123',
            title: 'Disney World 2013',
            description: 'DCP Fall 2013'
        };
        
        return request
            .get(`/api/albums/${album3._id}`)
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.body.error, new RegExp(album3._id));
            });
    });
});