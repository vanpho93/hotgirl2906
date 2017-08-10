const assert = require('assert');
const request = require('supertest');

const HotGirl = require('../HotGirl');
const app = require('../app');

describe('Testing route like a girl', () => {// eslint-disable-line
    it('Can like girl by /like/:id', async () => {// eslint-disable-line
        const hotgirlBefore = await HotGirl.getHotGirlById(1);
        const response = await request(app).get('/like/1');
        assert(response.status === 200);
        const hotgirlAfter = await HotGirl.getHotGirlById(1);
        assert(hotgirlBefore.likeNumber === hotgirlAfter.likeNumber - 1);
    });
});
