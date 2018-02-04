'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = isPromise;
/**
 * returns true if promise is given
 */
function isPromise(value) {
    try {
        if (typeof value.then === 'function') return true;
    } catch (err) {}
    return false;
}