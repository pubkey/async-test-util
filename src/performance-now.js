/**
 * same as perfommance.now()
 * but works in browsers and nodeJs
 */


import * as isNode from 'is-node';

export default function performanceNow() {
    let perf;
    if (isNode) {
        const {
            performance
        } = require('perf_hooks');
        perf = performance;
    } else
        perf = performance;

    return perf.now();
}
