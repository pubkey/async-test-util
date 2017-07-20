const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

describe('run-forever.test.js', () => {
    it('should run forever', async() => {
        let t = 0;
        const pred = () => t++;
        AsyncTestUtil.runForever(pred, 10);

        await AsyncTestUtil.wait(100);
        assert.ok(t > 4);
        const lastT = t;
        await AsyncTestUtil.wait(100);
        assert.ok(t > lastT);
    });
});
