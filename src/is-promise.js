/**
 * returns true if promise is given
 */
export default function isPromise(value) {
    if (
        typeof value !== 'undefined' &&
        typeof value.then === 'function'
    ) {
        return true;
    }
    return false;
}
