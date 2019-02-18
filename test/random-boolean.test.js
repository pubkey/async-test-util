const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

describe('random-boolean.test.js', () => {
    it('should return a boolean', () => {
        const bool = AsyncTestUtil.randomBoolean();
        assert.equal(typeof bool, 'boolean');
    });

    it('should sometimes return false or true', () => {
        let wasTrue = false;
        let wasFalse = false;
        while (!wasTrue || !wasFalse) {
            const bool = AsyncTestUtil.randomBoolean();
            if (bool === true) wasTrue = true;
            if (bool === false) wasFalse = true;
        }
    });
});
