const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');


describe('clone.test.js', () => {
    it('should clone the object', () => {
        const obj = {
            foo: 'bar'
        };
        const cloned = AsyncTestUtil.clone(obj);
        assert.equal(JSON.stringify(obj), JSON.stringify(cloned));
    });
});
