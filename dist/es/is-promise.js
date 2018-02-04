/**
 * returns true if promise is given
 */
export default function isPromise(value) {
    try {
        if (typeof value.then === 'function') return true;
    } catch (err) {}
    return false;
}