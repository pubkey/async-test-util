const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');


describe('deep-equal.test.js', () => {
    it('should be equal', () => {
        const obj = {
            foo: 'bar',
            nested: {
                foo: 'bar'
            }
        };
        const obj2 = {
            foo: 'bar',
            nested: {
                foo: 'bar'
            }
        };
        assert.ok(AsyncTestUtil.deepEqual(obj, obj2));
    });
    it('should not be equal', () => {
        const obj = {
            foo: 'bar'
        };
        const obj2 = {
            foo: 'bar',
            nested: {
                foo: 'bar'
            }
        };
        assert.equal(false, AsyncTestUtil.deepEqual(obj, obj2));
    });
});
