'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = performanceNow;

var _isNode = require('is-node');

var _isNode2 = _interopRequireDefault(_isNode);

var _requireOnNodeOnly = require('./require-on-node-only');

var _requireOnNodeOnly2 = _interopRequireDefault(_requireOnNodeOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * same as performance.now()
 * but works in browsers and nodeJs
 * @link https://developer.mozilla.org/de/docs/Web/API/Performance/now
 */
function performanceNow() {
    var perf = void 0;
    if (_isNode2['default']) {
        var performance = _requireOnNodeOnly2['default'].perfHooks.performance;

        perf = performance;
    } else perf = window.performance;

    return perf.now();
}