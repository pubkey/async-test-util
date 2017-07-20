import wait from './wait';

export default async function runForever(predicate, interval = 100) {
    let t = 1; // trick optimizers
    while (t > 0) {
        await predicate();
        await wait(interval);
        t++;
    }
    return;
}
