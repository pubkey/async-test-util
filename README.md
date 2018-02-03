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
it('should wait until server is online (maxtime: 1000ms)', async() => {
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

## waitForever()

Waits forever, never resolves.

```javascript
it('should never resolve', async() => {
    let resolved = false;
    AsyncTestUtil
        .waitForever()
        .then(() => resolved = true);
    await AsyncTestUtil.wait(100);
    assert.equal(false, resolved);
});
```

## runForever()

Runs the given predicate-function forever. Between each run, the interval-time is awaited.

```javascript
it('should run forever', async() => {
    let t = 0;
    const pred = () => t++;
    AsyncTestUtil.runForever(
        pred, // predicate-function
        10    // interval
     );

    await AsyncTestUtil.wait(100);
    assert.ok(t > 4);
    const lastT = t;
    await AsyncTestUtil.wait(100);
    assert.ok(t > lastT);
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

// assertThrows returns the error
it('should have the custom error-property', async() => {
    const throwingFunction = async()=>{
        const error = new Error('error message');
        error.foo = 'bar';
        throw error;
    }
    const thrown = await AsyncTestUtil.assertThrows(
        () => pingServer(),       // function that throws                                    (required)
        Error,                    // Error-type                                              (optional)
        'message'               // text-flag, throw if error-message does not include this (optional)  
    );
    assert.equal(thrown.foo, 'bar');
});
```

## resolveValues()

Recieves an object with promises as values. Returns ans object with the resolved promises as values. Use this in test-setups to improve the test-speed by running everything in parallel.

```javascript

// instead of this
const database = await connectDatabase();
const user1 = await getUser();
const user2 = await getUser();

// do this
const {
    database,
    user1,
    user2
} = await AsyncTestUtil.resolveValues({
    database: connectDatabase();
    user1: getUser();
    user2: getUser();
});
```

## isPromise()
Returns true if the given value is a `Promise`;

```javascript

const is = AsyncTestUtil.isPromise(myAsyncFunction()); // true
const is = AsyncTestUtil.isPromise('foobar'); // false

```

## promisify

Transforms the given value to a promise if it was no promise before.

``` javascript

const ensurePromise = AsyncTestUtil.isPromise(maybeAsyncFunction());

// now you are sure this is a promise
ensurePromise.then(/* ... */)

```

## randomString()

Creates a random string. Takes length as first parameter an custom charset as second.

```javascript

console.log(AsyncTestUtil.randomString());
// > 'rhfkx'

console.log(AsyncTestUtil.randomString(10));
// > 'dhcvkledzu'

console.log(AsyncTestUtil.randomString(
    6,    // (optional) length
    'abc' // (optional) charset, only this will be used to create the string
));
// > 'acbcba'
```

## randomNumber()

Creates a random number. Optional range can be given.

```javascript

console.log(AsyncTestUtil.randomNumber());
// > 56

console.log(AsyncTestUtil.randomNumber(
    1000, // min-value (default=0)
    2000 // max-value (default=1000)
));
// > 1768
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
