/**
 * returns true if promise is given
 */
export default function isPromise(value) {
    return typeof value.then === 'function';
}
