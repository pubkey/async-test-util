import isPromise from './is-promise';
import {
    oneOfArrayNotInString
} from './utils';
/**
 * async version of assert.throws
 * @param  {function}  test
 * @param  {Error|TypeError|string} [error=Error] error
 * @param  {?string} [contains=''] contains
 * @return {Promise}       [description]
 */
export default function assertThrows(test, error = Error, contains = []) {

    if (!Array.isArray(contains)) contains = [contains];

    const shouldErrorName = typeof error === 'string' ? error : error.name;

    const nonThrown = new Error(
        'util.assertThrowsAsync(): Missing rejection' +
        (error ? ' with ' + error.name : '')
    );
    const ensureErrorMatches = error => {
        // wrong type
        if (error.constructor.name != shouldErrorName) {
            return new Error(`
             util.assertThrowsAsync(): Wrong Error-type
             - is    : ${error.constructor.name}
             - should: ${shouldErrorName}
             - error: ${error.toString()}
             `);
        }
        // check if contains
        const errorString = error.toString();
        if (contains.length > 0 && oneOfArrayNotInString(contains, errorString)) {
            return new Error(`
               util.assertThrowsAsync(): Error does not contain
               - should contain: ${contains}
               - is string: ${error.toString()}
             `);
        }
        return false;
    };


    return new Promise((res, rej) => {
        let val;
        try {
            val = test();
        } catch (err) {
            const wrong = ensureErrorMatches(err);
            if (wrong) rej(wrong);
            else res(err);
            return;
        }
        if (isPromise(val)) {
            val
                .then(() => {
                    // has not thrown
                    rej(nonThrown);
                })
                .catch(err => {
                    const wrong = ensureErrorMatches(err);
                    if (wrong) rej(wrong);
                    else res(err);
                });
        } else
            rej(nonThrown);
    });
}
