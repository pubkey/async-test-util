import isPromise from './is-promise';

/**
 * takes promise or non-promise,
 * returns promise
 * @param  {any} value
 * @return {Promise}
 */
export default function promisify(value) {
    if (isPromise(value)) {
        // is promise
        return value;
    } else {
        // is non-promise
        return Promise.resolve(value);
    }
}