'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = promisify;

var _isPromise = require('./is-promise');

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * takes promise or non-promise,
 * returns promise
 * @param  {any} value
 * @return {Promise}
 */
function promisify(value) {
    if ((0, _isPromise2['default'])(value)) {
        // is promise
        return value;
    } else {
        // is non-promise
        return Promise.resolve(value);
    }
}