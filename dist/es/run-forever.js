import wait from './wait';
import promisify from './promisify';

export default function runForever(predicate) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var t = 1; // trick optimizers
    return new Promise(function (res) {
        var runLoop = function runLoop() {
            t++;
            var val = promisify(predicate());
            val.then(function () {
                return wait(interval);
            }).then(function () {
                return runLoop();
            });
        };
        runLoop();
    });
}