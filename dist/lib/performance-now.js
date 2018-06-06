'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = performanceNow;

var _isNode = require('is-node');

var isNode = _interopRequireWildcard(_isNode);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function performanceNow() {
    var perf = void 0;
    if (isNode) {
        var _require = require('perf_hooks'),
            _performance = _require.performance;

        perf = _performance;
    } else perf = performance;

    return perf.now();
} /**
   * same as perfommance.now()
   * but works in browsers and nodeJs
   */