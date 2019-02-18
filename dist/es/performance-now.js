import isNode from 'is-node';

import NodeOnly from './require-on-node-only';

/**
 * same as performance.now()
 * but works in browsers and nodeJs
 * @link https://developer.mozilla.org/de/docs/Web/API/Performance/now
 */
export default function performanceNow() {
    var perf = void 0;
    if (isNode) {
        var performance = NodeOnly.perfHooks.performance;

        perf = performance;
    } else perf = window.performance;

    return perf.now();
}