const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

describe('performance-now.test.js', () => {
    it('should return a number', () => {
        const now = AsyncTestUtil.performanceNow();
        assert.equal(typeof now, 'number');
    });

    it('should return a higher number later', async () => {
        const now1 = AsyncTestUtil.performanceNow();
        await AsyncTestUtil.wait(50);
        const now2 = AsyncTestUtil.performanceNow();
        assert.ok(now1 < now2);
    });
});
