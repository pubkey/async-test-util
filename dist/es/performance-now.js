/**
 * same as perfommance.now()
 * but works in browsers and nodeJs
 */

import isNode from 'is-node';

export default function performanceNow() {
    var perf = void 0;
    if (isNode) {
        var _require = require('perf_hooks'),
            performance = _require.performance;

        perf = performance;
    } else perf = window.performance;

    return perf.now();
}