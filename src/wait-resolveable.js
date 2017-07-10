/**
 * this returns a promise and the resolve-function
 * which can be called to resolve before the timeout has passed
 * @param  {Number}  [ms=0] [description]
 */
export default function waitResolveable(ms = 0) {
    const ret = {};
    ret.promise = new Promise(res => {
        ret.resolve = (x) => res(x);
        setTimeout(res, ms);
    });
    return ret;
}
