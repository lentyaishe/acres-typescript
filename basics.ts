const x: number[] = [1, 2];

x.push(2);

const y: number = x.pop() as number;
if (y !== undefined) {
    x[2] = 12;
}
let z: number = y !== undefined ? 0 : 12;