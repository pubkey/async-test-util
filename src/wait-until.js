import wait from './wait';

/**
 * waits until the given function returns true
 * @param  {function}  fun
 * @return {Promise}
 */
export default async function waitUntil(fun, timeout = 0, interval = 20) {
    let timedOut = false;
    let ok = false;

    if (timeout !== 0) {
        (async() => {
            await wait(timeout);
            timedOut = true;
        })();
    }

    while (!ok) {

        if (timedOut)
            throw new Error('AsyncTestUtil.waitUntil(): reached timeout of ' + timeout + 'ms');

        await wait(interval);
        ok = await fun();
    }
}
