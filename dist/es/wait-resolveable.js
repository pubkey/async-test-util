/**
 * this returns a promise and the resolve-function
 * which can be called to resolve before the timeout has passed
 * @param  {Number}  [ms=0] [description]
 */
export default function waitResolveable() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var ret = {};
    ret.promise = new Promise(function (res) {
        ret.resolve = function (x) {
            return res(x);
        };
        setTimeout(res, ms);
    });
    return ret;
}