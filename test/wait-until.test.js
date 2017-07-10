const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');


describe('wait-until.test.js', () => {
    it('should wait until function returns true', async() => {
        let x = 0;
        const fun = function() {
            x = x + 1;
            return x = 5;
        };
        await AsyncTestUtil.waitUntil(fun);
    });
    it('should throw if timeout is over', async() => {
        const fun = function() {
            return false;
        };
        await AsyncTestUtil.assertThrows(
            () => AsyncTestUtil.waitUntil(fun, 100),
            Error,
            'timeout'
        );
    });
    it('should not throw because timeout not reached', async() => {
        let x = 0;
        const fun = function() {
            x = x + 1;
            return x = 5;
        };
        await AsyncTestUtil.waitUntil(fun, 100);
        await AsyncTestUtil.wait(300);
    });
});
