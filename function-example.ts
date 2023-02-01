function formatCommandline(command: string[] | string): string {
    let result: string;
    if (typeof command === "string") {
        result = command.trim();
    }
    else {
        // "     lk     hl   " = "lk     hl"
        const temp: string = command.join(" ");
        result = temp.trim();
    }

    return result;
}

console.log(formatCommandline(["  Hi   ", " c class   "]));

const errorMessage: string = "something went wrong";
console.error("ERROR:", errorMessage);