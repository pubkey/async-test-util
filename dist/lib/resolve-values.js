'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = resolveValues;

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * resolves all values if they are promises
 * returns equal object with resolved
 */
function resolveValues(obj) {
    var ret = {};
    return Promise.all(Object.keys(obj).map(function (k) {
        var val = (0, _promisify2['default'])(obj[k]);
        return val.then(function (v) {
            return ret[k] = v;
        });
    })).then(function () {
        return ret;
    });
}