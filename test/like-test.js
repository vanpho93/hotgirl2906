const HotGirl = require('../HotGirl');

const assert = require('assert');

describe('Test like a girl by id', () => { // eslint-disable-line
    it('Can like a girl by static method', async () => { // eslint-disable-line
        const hotgirl = await HotGirl.getHotGirlById(1);
        await HotGirl.likeGirlById(1);
        const hotgirlAfterLike = await HotGirl.getHotGirlById(1);
        assert(hotgirl.likeNumber === hotgirlAfterLike.likeNumber - 1);
    });
}); 
