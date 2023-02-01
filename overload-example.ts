function log(data: number): void;
function log(data: string): void;
function log(data: object): void;
function log(data: number | string | object): void {
    console.log(typeof data);  
}

log({}); // Design time error