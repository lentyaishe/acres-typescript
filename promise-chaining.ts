function waitFor(waitInMillis: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (waitInMillis > 10000) {
            reject("Too long wait");
            return;
        }
        setTimeout(() => {
            resolve();
        }, waitInMillis);
    });
}

function getTimestamp(): string {
    const now: Date = new Date();
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
}

function promiseHell(): Promise<void> {
    // promise calls hell
    return new Promise<void>((resolve, reject) => {
        waitFor(500)
            .then(() => {
                console.log(`${getTimestamp()}: First return`);
                waitFor(1000)
                    .then(() => {
                        console.log(`${getTimestamp()}: Second return`);
                        waitFor(2000)
                            .then(() => {
                                console.log(`${getTimestamp()}: Third return`);
                                resolve();
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    })
                    .catch((error) => {
                        reject(error);
                    });
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function promiseChained(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        waitFor(500)
            .then(() => {
                console.log(`${getTimestamp()}: First return`);
                return waitFor(1000);
            })
            .then(() => {
                console.log(`${getTimestamp()}: Second return`);
                return waitFor(2000);
            })
            .then(() => {
                console.log(`${getTimestamp()}: Third return`);
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}

promiseHell()
    .then(() => {
        return promiseChained();
    })
    .catch((error) => {
        console.error(error);
    })

console.log(`${getTimestamp()}: Forth return`);