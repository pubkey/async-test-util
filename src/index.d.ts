/**
 * waits until the given time has passed, then resolved
 * @param  {number}        [time=0] time in ms (optional)
 * @return {Promise<void>}
 */
export const wait: waitType;
type waitType = (time?: number) => Promise<void>;

interface waitResolveableState {
    promise: Promise<any>,
    resolve: Function
}
/**
 * waits until given time is over or manually resolved
 * @param  {number}               [time=0]
 * @return {waitResolveableState}
 */
export const waitResolveable: waitResolveableType;
type waitResolveableType = (time?: number) => waitResolveableState;
/**
 * runs the given function many times until it returns true
 * @param  {Function}      predicate
 * @param  {number}        [timeout=0] will throw if timeout is over, 0=Infinity
 * @param  {number}        [interval=20]
 * @return {Promise<void>}
 */
export const waitUntil: waitUntilType;
type waitUntilType = (predicate: Function, timeout?: number, interval?: number) => Promise<void>;

/**
 * runs the given predicate-function forever
 * @param  {Function}      predicate
 * @param  {number}        [interval=100] interval-time in ms (optional)
 * @return {Promise<void>} never resolves
 */
export const runForever: runForeverType;
type runForeverType = (predicate: Function, interval?: number) => Promise<void>;

/**
 * waits forever
 * @return {Promise<void>}
 */
export const waitForever: waitForeverType;
type waitForeverType = () => Promise<void>;

/**
 * async version of assert.throws
 * @param  {Function}      fun      which should throw
 * @param  {any}           error    error-type (TypeError, Error or string)
 * @param  {string}      contains   the thrown error must contain this string
 * @return {Promise<void>}
 */
export const assertThrows: assertThrowsType;
type assertThrowsType = (fun: Function, error?: any, contains?: 'string') => Promise<Error | TypeError>;
/**
 * Recieves an object with promises as values. Returns ans object with the resolved promises as values.
 * @param  {Object}      obj      with promises as values
 * @return {Promise<Object>} with resolved values
 */
type ResolveValuesParam = {
    [key: string]: Promise<any> | any
}
export const resolveValues: resolveValuesType;
type resolveValuesType = (obj: ResolveValuesParam) => Promise<ResolveValuesParam>;

/**
 * same as performance.now()
 * But works in browsers and NodeJs
 * @link https://developer.mozilla.org/de/docs/Web/API/Performance/now
 */
export const performanceNow: performanceNowType;
type performanceNowType = () => Number;

/**
 * returns true if a promise was given
 */
export const isPromise: isPromiseType;
type isPromiseType = (maybePromise: any) => boolean;

/**
 * transforms the given value to a promise
 * if it was no promise before
 */
export const promisify: promisifyType;
type promisifyType = (maybePromise: any) => Promise<any>;

/**
 * deep-clones the given object
 * mapped to the 'clone' npm-module
 * @link https://www.npmjs.com/package/clone
 * @param  {any} obj [description]
 * @return {any}     [description]
 */
export const clone: cloneType;
type cloneType = (obj: any) => any;


/**
 * checks if the given objects are deep-equal
 * mapped to the 'deep-equal' npm-module
 * @link https://www.npmjs.com/package/deep-equal
 * @param  {any} obj1 [description]
 * @param  {any} obj2 [description]
 * @return {boolean}     true/false
 */
export const deepEqual: deepEqualType;
type deepEqualType = (obj1: any, obj2: any) => boolean;

/**
 * creates a random string
 * @param  {number} [length=5] length of the string
 * @param  {string} [charset=abcdefghijklmnopqrstuvwxyz]  if given, only this charset will be used
 * @return {string}
 */
export const randomString: randomStringType;
type randomStringType = (length?: number, charset?: string) => string;

/**
 * creates a random number
 * @param  {number} [min=0] min value (inclusive)
 * @param  {number} [max=1000] max value (inclusive)
 * @return {number}
 */
export const randomNumber: randomNumberType;
type randomNumberType = (length?: number, charset?: string) => string;

declare const _default: {
    assertThrows: assertThrowsType,
    clone: cloneType,
    deepEqual: deepEqualType,
    isPromise: isPromiseType
    performanceNow: performanceNowType,
    promisify: promisifyType,
    runForever: runForeverType,
    randomString: randomStringType,
    randomNumber: randomNumberType,
    resolveValues: resolveValuesType,
    waitResolveable: waitResolveableType,
    waitUntil: waitUntilType,
    wait: waitType,
    waitForever: waitForeverType
};

export default _default;
