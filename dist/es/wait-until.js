import wait from './wait';
import promisify from './promisify';

/**
 * waits until the given function returns true
 * @param  {function}  fun
 * @return {Promise}
 */
export default function waitUntil(fun) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
  var timedOut = false;
  var ok = false;
  if (timeout !== 0) {
    wait(timeout).then(function () {
      return timedOut = true;
    });
  }
  return new Promise(function (resolve, reject) {
    /**
     * @recursive
     * @return {Promise<void>}
     */
    function runLoopOnce() {
      if (ok) {
        resolve(ok);
      } else if (timedOut) {
        reject(new Error('AsyncTestUtil.waitUntil(): reached timeout of ' + timeout + 'ms'));
      } else {
        return wait(interval).then(function () {
          return promisify(fun());
        })
        /**
         * Propagate errors of the fun function
         * upwards.
         */["catch"](function (err) {
          return reject(err);
        }).then(function (value) {
          ok = value;
          return runLoopOnce();
        });
      }
    }
    runLoopOnce();
  });
}