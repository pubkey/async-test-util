export function oneOfArrayNotInString(stringAr, str) {
  var foundNotInString = stringAr.find(function (sub) {
    return !str.includes(sub);
  });
  if (foundNotInString) return true;else return false;
}
export var TIMEOUT_MAX = 2147483647;
export var TIMEOUT_MIN = 0;

/**
 * @link https://mrcoles.com/maximum-delay-settimeout/
 */
export function ensureInSetTimeoutLimit(timeoutInMilliseconds) {
  if (timeoutInMilliseconds > TIMEOUT_MAX) {
    throw new Error('setTimeout cannot be called with time greater than ' + TIMEOUT_MAX);
  }
  if (timeoutInMilliseconds < TIMEOUT_MIN) {
    throw new Error('setTimeout cannot be called with time lower than ' + TIMEOUT_MIN);
  }
  return timeoutInMilliseconds;
}