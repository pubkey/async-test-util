/**
 * waits until the given time has passed, then resolved
 * @param  {number}        [time=0] time in ms (optional)
 * @return {Promise<void>}
 */
export function wait(time?: number): Promise<void>;

interface waitResolveableState {
    promise: Promise<any>,
    resolve: Function
}
/**
 * waits until given time is over or manually resolved
 * @param  {number}               [time=0]
 * @return {waitResolveableState}
 */
export function waitResolveable(time?: number): waitResolveableState;

/**
 * runs the given function many times until it returns true
 * @param  {Function}      predicate
 * @param  {number}        [timeout=0] will throw if timeout is over, 0=Infinity
 * @param  {number}        [interval=20]
 * @return {Promise<void>}
 */
export function waitUntil(predicate: Function, timeout?: number, interval?: number): Promise<void>;


/**
 * runs the given predicate-function forever
 * @param  {Function}      predicate
 * @param  {number}        [interval=100] interval-time in ms (optional)
 * @return {Promise<void>} never resolves
 */
export function runForever(predicate: Function, interval?: number): Promise<void>;


/**
 * waits forever
 * @return {Promise<void>}
 */
export function waitForever(): Promise<void>;


/**
 * async version of assert.throws
 * @param  {Function}      fun      which should throw
 * @param  {any}           error    error-type (TypeError, Error or string)
 * @param  {string}      contains   the thrown error must contain this string
 * @return {Promise<void>}
 */
export function assertThrows(fun: Function, error?: any, contains?: 'string'): Promise<Error | TypeError>;

/**
 * Recieves an object with promises as values. Returns ans object with the resolved promises as values.
 * @param  {Object}      obj      with promises as values
 * @return {Promise<Object>} with resolved values
 */
type ResolveValuesParam = {
    [key: string]: Promise<any> | any
}
export function resolveValues(obj: ResolveValuesParam): Promise<ResolveValuesParam>;

/**
 * returns true if a promise was given
 */
export function isPromise(maybePromise: any): boolean;

/**
 * transforms the given value to a promise
 * if it was no promise before
 */
export function promisify(maybePromise: any): Promise<any>;

/**
 * deep-clones the given object
 * mapped to the 'clone' npm-module
 * @link https://www.npmjs.com/package/clone
 * @param  {any} obj [description]
 * @return {any}     [description]
 */
export function clone(obj: any): any;


/**
 * checks if the given objects are deep-equal
 * mapped to the 'deep-equal' npm-module
 * @link https://www.npmjs.com/package/deep-equal
 * @param  {any} obj1 [description]
 * @param  {any} obj2 [description]
 * @return {boolean}     true/false
 */
export function deepEqual(obj1: any, obj2: any): boolean;


/**
 * creates a random string
 * @param  {number} [length=5] length of the string
 * @param  {string} [charset=abcdefghijklmnopqrstuvwxyz]  if given, only this charset will be used
 * @return {string}
 */
export function randomString(length?: number, charset?: string): string;

/**
 * creates a random number
 * @param  {number} [min=0] min value (inclusive)
 * @param  {number} [max=1000] max value (inclusive)
 * @return {number}
 */
export function randomNumber(length?: number, charset?: string): string;

declare const _default: {
    assertThrows,
    clone,
    deepEqual,
    waitResolveable,
    waitUntil,
    wait,
    waitForever,
    runForever,
    randomString,
    randomNumber
};

export default _default;
