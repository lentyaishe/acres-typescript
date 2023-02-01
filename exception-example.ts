// interface systemError extends Error {
//     code: number;
//     message: string;
// }

function throwsError(): void {
    // const error: systemError = {
    //     code: 99,
    //     message: "Unknown error",
    //     name: "Unknown error"
    // };
    throw new Error("Unknown error");
}

function treatException(): void {
    const x: number = 42;

    try {
        throwsError();
    }
    catch (error: any) {
        console.error(error);
    }

    console.log(x);
}

treatException();