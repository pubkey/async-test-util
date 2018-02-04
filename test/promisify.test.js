const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');


describe('promisify.test.js', () => {
    it('should return a promise', () => {
        const ret = AsyncTestUtil.promisify('foobar');
        assert.ok(ret instanceof Promise);
    });
    it('should not crash when undefined given', () => {
        const ret = AsyncTestUtil.promisify(undefined);
        assert.ok(ret instanceof Promise);
    });
});
