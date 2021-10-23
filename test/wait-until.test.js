const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

process.on('unhandledRejection', error => {
    console.error('# got unhandledRejection');
    throw error;
});

describe('wait-until.test.js', () => {
    it('should wait until function returns true', async () => {
        let x = 0;
        const fun = function () {
            x = x + 1;
            return x = 5;
        };
        await AsyncTestUtil.waitUntil(fun);
    });
    it('should wait until async-function returns true', async () => {
        let x = 0;
        const fun = async () => {
            await AsyncTestUtil.wait(10);
            x++;
            if (x > 5) return true;
        };
        await AsyncTestUtil.waitUntil(fun);
    });
    it('should throw if timeout is over', async () => {
        const fun = function () {
            return false;
        };
        await AsyncTestUtil.assertThrows(
            () => AsyncTestUtil.waitUntil(fun, 100),
            Error,
            'timeout'
        );
    });
    it('should not throw because timeout not reached', async () => {
        let x = 0;
        const fun = function () {
            x = x + 1;
            return x = 5;
        };
        await AsyncTestUtil.waitUntil(fun, 100);
        await AsyncTestUtil.wait(300);
    });
    it('should propagate error upwards', async () => {
        const fun = async function () {
            await AsyncTestUtil.wait(10);
            throw new Error('error');
        };
        let hasThrown = false;
        try {
            await AsyncTestUtil.waitUntil(fun);
        } catch (err) {
            hasThrown = true;
        }
        assert.ok(hasThrown);
    });
});
