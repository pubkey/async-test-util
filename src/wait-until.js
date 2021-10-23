import wait from './wait';
import promisify from './promisify';

/**
 * waits until the given function returns true
 * @param  {function}  fun
 * @return {Promise}
 */
export default function waitUntil(fun, timeout = 0, interval = 20) {
    let timedOut = false;
    let ok = false;

    if (timeout !== 0) {
        wait(timeout).then(() => timedOut = true);
    }


    return new Promise((resolve, reject) => {

        /**
         * @recursive
         * @return {Promise<void>}
         */
        function runLoopOnce() {
            if (ok) {
                resolve();
            } else if (timedOut) {
                reject(new Error('AsyncTestUtil.waitUntil(): reached timeout of ' + timeout + 'ms'));
            } else {
                return wait(interval)
                    .then(() => promisify(fun()))
                    /**
                     * Propagate errors of the fun function
                     * upwards.
                     */
                    .catch(err => reject(err))
                    .then(value => {
                        ok = value;
                        return runLoopOnce();
                    });
            }
        }
        runLoopOnce();
    });
}
