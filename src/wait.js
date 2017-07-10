/**
 * [promiseWait description]
 * @param  {Number}  [ms=0] time in ms
 * @return {Promise}
 */
export default async function wait(ms = 0) {
    return new Promise(res => setTimeout(res, ms));
}
