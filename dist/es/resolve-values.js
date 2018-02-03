import promisify from './promisify';

/**
 * resolves all values if they are promises
 * returns equal object with resolved
 */
export default function resolveValues(obj) {
    var ret = {};
    return Promise.all(Object.keys(obj).map(function (k) {
        var val = promisify(obj[k]);
        return val.then(function (v) {
            return ret[k] = v;
        });
    })).then(function () {
        return ret;
    });
}