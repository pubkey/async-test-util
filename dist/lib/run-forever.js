'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = runForever;

var _wait = require('./wait');

var _wait2 = _interopRequireDefault(_wait);

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function runForever(predicate) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var t = 1; // trick optimizers
    return new Promise(function (res) {
        var runLoop = function runLoop() {
            t++;
            var val = (0, _promisify2['default'])(predicate());
            val.then(function () {
                return (0, _wait2['default'])(interval);
            }).then(function () {
                return runLoop();
            });
        };
        runLoop();
    });
}