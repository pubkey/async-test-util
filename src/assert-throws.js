/**
 * async version of assert.throws
 * @param  {function}  test
 * @param  {Error|TypeError|string} [error=Error] error
 * @param  {?string} [contains=''] contains
 * @return {Promise}       [description]
 */
export default async function assertThrows(test, error = Error, contains = '') {
    const shouldErrorName = typeof error === 'string' ? error : error.name;

    try {
        await test();
    } catch (e) {

        // wrong type
        if (e.constructor.name != shouldErrorName) {
            throw new Error(`
             util.assertThrowsAsync(): Wrong Error-type
             - is    : ${e.constructor.name}
             - should: ${shouldErrorName}
             - error: ${e.toString()}
             `);
        }

        // check if contains
        if (contains != '' && !e.toString().includes(contains)) {
            throw new Error(`
               util.assertThrowsAsync(): Error does not contain
               - should contain: ${contains}
               - is string: ${e.toString()}
             `);
        }
        // all is ok
        return 'util.assertThrowsAsync(): everything is fine';
    }
    throw new Error(
        'util.assertThrowsAsync(): Missing rejection' +
        (error ? ' with ' + error.name : '')
    );
}
