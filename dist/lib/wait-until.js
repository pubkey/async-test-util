'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = waitUntil;

var _wait = require('./wait');

var _wait2 = _interopRequireDefault(_wait);

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * waits until the given function returns true
 * @param  {function}  fun
 * @return {Promise}
 */
function waitUntil(fun) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

    var timedOut = false;
    var ok = false;

    if (timeout !== 0) (0, _wait2['default'])(timeout).then(function () {
        return timedOut = true;
    });

    return new Promise(function (resolve, reject) {
        var runLoop = function runLoop() {
            if (ok) {
                resolve();
                return;
            }
            if (timedOut) {
                reject(new Error('AsyncTestUtil.waitUntil(): reached timeout of ' + timeout + 'ms'));
                return;
            }
            (0, _wait2['default'])(interval).then(function () {
                var value = (0, _promisify2['default'])(fun());
                value.then(function (val) {
                    ok = val;
                    runLoop();
                });
            });
        };
        runLoop();
    });
}