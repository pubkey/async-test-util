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

    if (timeout !== 0)
        wait(timeout).then(() => timedOut = true);

    return new Promise((resolve, reject) => {
        const runLoop = () => {
            if (ok) {
                resolve();
                return;
            }
            if (timedOut) {
                reject(new Error('AsyncTestUtil.waitUntil(): reached timeout of ' + timeout + 'ms'));
                return;
            }
            wait(interval).then(() => {
                const value = promisify(fun());
                value.then(val => {
                    ok = val;
                    runLoop();
                });
            });
        };
        runLoop();
    });
}
