import assertThrows from './assert-throws';
import clone from './clone';
import deepEqual from './deep-equal';
import waitResolveable from './wait-resolveable';
import waitUntil from './wait-until';
import wait from './wait';
import waitForever from './wait-forever';
import runForever from './run-forever';
import randomString from './random-string';
import randomNumber from './random-number';
import randomBoolean from './random-boolean';
import resolveValues from './resolve-values';
import performanceNow from './performance-now';
import isPromise from './is-promise';
import promisify from './promisify';

const AsyncTestUtil = {
    assertThrows,
    clone,
    deepEqual,
    waitResolveable,
    waitUntil,
    wait,
    waitForever,
    runForever,
    randomString,
    randomNumber,
    randomBoolean,
    resolveValues,
    performanceNow,
    isPromise,
    promisify
};
export default AsyncTestUtil;

export {
    assertThrows,
    clone,
    deepEqual,
    waitResolveable,
    waitUntil,
    wait,
    waitForever,
    runForever,
    randomString,
    randomNumber,
    randomBoolean,
    resolveValues,
    performanceNow,
    isPromise,
    promisify
};
