const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

describe('assert-throws.test.js', () => {
    it('valid if function throws', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            throw new Error('foo');
        };
        await AsyncTestUtil.assertThrows(
            test,
            Error
        );
    });
    it('valid if non-async-function throws', async () => {
        const test = function () {
            throw new Error('foo');
        };
        await AsyncTestUtil.assertThrows(
            test,
            Error
        );
    });
    it('throw if function does not throw', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            return 1;
        };
        let thrown = false;
        try {
            await AsyncTestUtil.assertThrows(
                test,
                Error
            );
        } catch (e) {
            thrown = true;
        }
        assert.ok(thrown);
    });
    it('throw if no TypeError', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            throw new Error('foo');
        };
        let thrown = false;
        try {
            await AsyncTestUtil.assertThrows(
                test,
                TypeError
            );
        } catch (e) {
            thrown = true;
        }
        assert.ok(thrown);
    });
    it('throw if no Error', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            throw new TypeError('foo');
        };
        let thrown = false;
        try {
            await AsyncTestUtil.assertThrows(
                test,
                Error
            );
        } catch (e) {
            thrown = true;
        }
        assert.ok(thrown);
    });
    it('throw if not contains', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            throw new TypeError('foo');
        };
        let thrown = false;
        try {
            await AsyncTestUtil.assertThrows(
                test,
                TypeError,
                'bar'
            );
        } catch (e) {
            thrown = true;
        }
        assert.ok(thrown);
    });
    it('dont throw if contains', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            throw new Error('foobar');
        };
        await AsyncTestUtil.assertThrows(
            test,
            Error,
            'oba'
        );
    });
    it('compare to custom error', async () => {
        class CustomError extends Error {
            constructor(message) {
                super(message);
            }
        }

        const throwingFunction = () => {
            throw new CustomError('my custom error is thrown');
        };

        // via class
        await AsyncTestUtil.assertThrows(
            () => throwingFunction(),
            CustomError,
            'custom'
        );

        // via class-name
        await AsyncTestUtil.assertThrows(
            () => throwingFunction(),
            'CustomError',
            'custom'
        );

    });
    it('should return the error', async () => {
        const throwingFunction = async () => {
            await Promise.resolve();
            const error = new Error('foobar');
            error.foo = 'bar';
            throw error;
        };
        // via class
        const ret = await AsyncTestUtil.assertThrows(
            () => throwingFunction(),
            Error,
            'foobar'
        );
        assert.equal(ret.foo, 'bar');
    });
    it('should contain the stack trace if wrong error type', async () => {
        const throwingFunction = async () => {
            await Promise.resolve();
            const error = new Error('foobar');
            error.foo = 'bar';
            throw error;
        };
        // via class
        let hasThrown = false;
        try {
            await AsyncTestUtil.assertThrows(
                () => throwingFunction(),
                'WrongErrorType',
                'foobar'
            );
        } catch (err) {
            assert.ok(err.message.includes('assert-throws.test.js'));
            hasThrown = true;
        }
        assert.ok(hasThrown);
    });
    it('should compare all in string-array', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            throw new Error('one foobar two');
        };
        await AsyncTestUtil.assertThrows(
            test,
            Error,
            ['one', 'two']
        );
    });
    it('should throw if only one matches', async () => {
        const test = async function () {
            await AsyncTestUtil.wait(1);
            throw new Error('foobar two');
        };
        let thrown = false;
        try {
            await AsyncTestUtil.assertThrows(
                test,
                Error,
                ['one', 'two']
            );
        } catch (e) {
            thrown = true;
        }
        assert.ok(thrown);
    });
});
