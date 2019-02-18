import isNode from 'is-node';

import NodeOnly from './require-on-node-only';

/**
 * same as performance.now()
 * but works in browsers and nodeJs
 * @link https://developer.mozilla.org/de/docs/Web/API/Performance/now
 */
export default function performanceNow() {
    let perf;
    if (isNode) {
        const {
            performance
        } = NodeOnly.perfHooks;
        perf = performance;
    } else
        perf = window.performance;

    return perf.now();
}
