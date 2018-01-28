/**
 * resolves all values if they are promises
 * returns equal object with resolved
 */
export default async function resolveValues(obj) {
    const ret = {};
    await Promise.all(
        Object.keys(obj).map(async (k) => {
            const val = await obj[k];
            ret[k] = val;
        })
    );
    return ret;
}
