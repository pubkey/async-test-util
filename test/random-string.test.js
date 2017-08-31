const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');


describe('random-string.test.js', () => {

    it('should create a random string', () => {
        const str = AsyncTestUtil.randomString(5);
        assert.equal(typeof str, 'string');
        assert.equal(str.length, 5);
    });

    it('should use the given charset', () => {
        const str = AsyncTestUtil.randomString(5, 'a');
        assert.equal(str, 'aaaaa');
    });

});
