function waitFor(waitInMillis: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (waitInMillis > 10000) {
            reject("Too long wait");
            return;
        }
        setTimeout(() => {
            switch (waitInMillis) {
                case 500:
                    console.log(`${getTimestamp()}: First return`);
                    break;
                case 1000:
                    console.log(`${getTimestamp()}: Second return`);
                    break;
                case 2000:
                    console.log(`${getTimestamp()}: Third return`);
                    break;
                default:
                    console.warn("Unknown period to wait");
                    break;
            }
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
                waitFor(1000)
                    .then(() => {
                        waitFor(2000)
                            .then(() => {
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
                return waitFor(1000);
            })
            .then(() => {
                return waitFor(2000);
            })
            .then(() => {
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function asyncAwaitedPromises(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await waitFor(500);
            await waitFor(1000);
            await waitFor(2000);
            resolve();
        }
        catch (error) {
            reject(error); // bubbling
        }
    });
}

function parallelPromises(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        Promise.all([
            waitFor(500),
            waitFor(1000),
            waitFor(2000)
        ])
            .then(() => {
                console.log(`${getTimestamp()}: All complete`);
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
        
        // await Promise.all([
        //     waitFor(500),
        //     waitFor(1000)
        // ]);

    });
}

function asyncAwaitRejectedPromise(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await waitFor(10500);
        }
        catch (error) {
            reject(error);
            return;
        }
        console.log(`${getTimestamp()}: Async await complete`);
        resolve();
    });
}

asyncAwaitRejectedPromise()
    .catch((error) => {
        console.error(error);
    });

// promiseHell()
//     .then(() => {
//         return promiseChained();
//     })
//     .then(() => {
//         return parallelPromises();
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// console.log(`${getTimestamp()}: Forth return`);