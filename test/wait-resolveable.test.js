const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');


describe('wait-resolveable.test.js', () => {
    it('should wait time is over', async() => {
        await AsyncTestUtil.waitResolveable(100);
    });
    it('should wait until manually resolved', async() => {
        let resolved = null;
        const waiter = AsyncTestUtil.waitResolveable(10000);
        waiter.promise.then(x => {
            resolved = x;
        });
        waiter.resolve('foobar');
        await AsyncTestUtil.wait();
        assert.equal('foobar', resolved);
    });
});
