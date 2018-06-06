/**
 * same as perfommance.now()
 * but works in browsers and nodeJs
 */

import * as isNode from 'is-node';

export default function performanceNow() {
    var perf = void 0;
    if (isNode) {
        var _require = require('perf_hooks'),
            _performance = _require.performance;

        perf = _performance;
    } else perf = performance;

    return perf.now();
}