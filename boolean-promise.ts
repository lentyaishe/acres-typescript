function booleanPromise(input: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        if (input >= 0) {
            resolve(true);
        }
        else {
            resolve(false);
        }
    });
}

async function usages(): Promise<void> {
    try {
        if (await booleanPromise(1000)) {
            console.log(await booleanPromise(-1000));
        }
    }
    catch (error) {
        console.error(error);
    }
}

usages();