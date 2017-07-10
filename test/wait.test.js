const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');


describe('wait.test.js', () => {
    it('should wait', async() => {
        let val = 0;
        AsyncTestUtil.wait(200).then(() => val = 1);
        assert.equal(0, val);
        await new Promise(res => {
            setTimeout(() => {
                assert.equal(val, 1);
                res();
            }, 400);
        });
    });
});
