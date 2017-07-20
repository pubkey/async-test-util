const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

describe('wait-forever.test.js', () => {
    it('should never resolve', async() => {
        let resolved = false;
        AsyncTestUtil
            .waitForever()
            .then(() => resolved = true);
        await AsyncTestUtil.wait(100);
        assert.equal(false, resolved);
    });
});
