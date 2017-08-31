const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

describe('random-number.test.js', () => {
    it('should create a random number', () => {
        const nr = AsyncTestUtil.randomNumber();
        assert.equal(typeof nr, 'number');
        assert.ok(nr >= 0);
        assert.ok(nr <= 100000);
    });

    it('should respect the range', () => {
        // do many times to be sure sucess is not random
        let t = 0;
        while (t < 1000) {
            const nr = AsyncTestUtil.randomNumber(100, 150);
            assert.ok(nr >= 100);
            assert.ok(nr <= 150);
            t++;
        }
    });
});
