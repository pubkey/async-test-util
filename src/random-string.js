/**
 * create a random string
 * @return {string}
 */
export default function randomString(length = 8, charset = 'abcdefghijklmnopqrstuvwxyz') {
    let text = '';
    for (let i = 0; i < length; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}
