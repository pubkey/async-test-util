/**
 * create a random string
 * @return {string}
 */
export default function randomString() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
    var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'abcdefghijklmnopqrstuvwxyz';

    var text = '';
    for (var i = 0; i < length; i++) {
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    }return text;
}