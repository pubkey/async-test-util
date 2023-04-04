import { ensureInSetTimeoutLimit } from './utils';
/**
 * [promiseWait description]
 * @param  {Number}  [ms=0] time in ms
 * @return {Promise}
 */
export default function wait(ms = 0) {
    return new Promise(res => setTimeout(res, ensureInSetTimeoutLimit(ms)));
}
