/**
 * [promiseWait description]
 * @param  {Number}  [ms=0] time in ms
 * @return {Promise}
 */
export default function wait() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
}