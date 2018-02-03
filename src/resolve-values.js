import promisify from './promisify';

/**
 * resolves all values if they are promises
 * returns equal object with resolved
 */
export default function resolveValues(obj) {
    const ret = {};
    return Promise
        .all(
            Object
            .keys(obj)
            .map((k) => {
                const val = promisify(obj[k]);
                return val.then(v => ret[k] = v);
            })
        )
        .then(() => ret);
}
