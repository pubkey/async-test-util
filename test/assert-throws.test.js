const assert = require('assert');
const AsyncTestUtil = require('../dist/lib/index');

describe('assert-throws.test.js', () => {
    it('valid if function throws', async() => {
        const test = async function() {
            await AsyncTestUtil.wait(1);
            throw new Error('foo');
        };
        await AsyncTestUtil.assertThrows(
            test,
            Error
        );
    });
    it('throw if function does not throw', async() => {
        const test = async function() {
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
    it('throw if no TypeError', async() => {
        const test = async function() {
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
    it('throw if no Error', async() => {
        const test = async function() {
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
    it('throw if not contains', async() => {
        const test = async function() {
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
    it('dont throw if contains', async() => {
        const test = async function() {
            await AsyncTestUtil.wait(1);
            throw new Error('foobar');
        };
        await AsyncTestUtil.assertThrows(
            test,
            Error,
            'oba'
        );
    });
});
