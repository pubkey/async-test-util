# async-test-util

Utility-functions that can be usefull when you have asynchronous tests in javascript.

## Installation

```sh
$ npm install async-test-util --save-dev
```

```javascript
// es6
import AsyncTestUtil from 'async-test-util';

// es5
var AsyncTestUtil = require('async-test-util');
```

## wait()

Waits until the given time has expired and then resolves.

```javascript
it('should wait', async() => {
    await AsyncTestUtil.wait(200);
    console.log('200 ms is over');
});
```

## waitResolveable()

Waits until the given timeout has expired or the resolve was triggered manually

```javascript
it('should wait until observable fired or time is over', async() => {
    const resolveable = AsyncTestUtil.waitResolveable(200);
    myObservable.subscribe(sth => {
        console.log('got first event');
        resolveable.resolve();
    });
    await resolveable.promise;
});
```

## waitUntil()

Waits until the given predicate-function returns true. Throws if the optional timeout has passed before.

```javascript
it('should wait until server is online', async() => {
    const checkServer = async() => {
        try{
            await fetch('http://example.com/api/');
            return true;
        }catch(){
            return false;
        }
    };
    await AsyncTestUtil.waitUntil(checkServer);
});
```

With timeout:

```javascript
it('should until server is online (maxtime: 1000ms)', async() => {
    const checkServer = async() => {
        try{
            await fetch('http://example.com/api/');
            return true;
        }catch(){
            return false;
        }
    };
    await AsyncTestUtil.waitUntil(checkServer, 1000);
});
```

## assertThrows()

Async-Form of [assert.throws](https://nodejs.org/api/assert.html#assert_assert_throws_block_error_message). Asserts that the given function throws with the defined error, throws if not.

```javascript
// with error-type
it('should throw because route does not exist', async() => {
    const getServerVersion = async() => {
        const response = await fetch('http://example.com/foobar/');
        return response;
    };
    await AsyncTestUtil.assertThrows(
        () => getServerVersion(),       // function that throws (required)
        Error                   // Error-type           (optional)
    );
});

// with error-text-flag
it('should throw because route does not exist', async() => {
    const pingServer = async() => {
        try{
            await fetch('http://example.com/foobar/');            
        }catch(err){
            throw new Error('route not reachable');
        }
    };
    await AsyncTestUtil.assertThrows(
        () => pingServer(),       // function that throws                                    (required)
        Error,                    // Error-type                                              (optional)
        'reachable'               // text-flag, throw if error-message does not include this (optional)  
    );
});
```

## clone()

Reference to [clone](https://www.npmjs.com/package/clone). Does exactly the same thing.

```javascript
it('should not modify the original object', () => {
    const original = {
        foo: 'bar',
        level: 1
    };
    const cloned = AsyncTestUtil.clone(original);
    cloned.level = 2;
    assert.equal(original.level, 1);
});
```

## deepEqual()

Reference to [deep-equal](https://www.npmjs.com/package/deep-equal). Does exactly the same thing.

```javascript
it('the 2 objects should be equal', () => {
    const obj1 = {
        foo: 'bar',
        level: 1
    };
    const obj2 = {
        foo: 'bar',
        level: 1
    };
    assert.ok(AsyncTestUtil.deepEqual(obj1, obj2));
});
```
