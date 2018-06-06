'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = performanceNow;

var _isNode = require('is-node');

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function performanceNow() {
    var perf = void 0;
    if (_isNode2['default']) {
        var _require = require('perf_hooks'),
            performance = _require.performance;

        perf = performance;
    } else perf = window.performance;

    return perf.now();
} /**
   * same as perfommance.now()
   * but works in browsers and nodeJs
   */