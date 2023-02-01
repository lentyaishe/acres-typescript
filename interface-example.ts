interface CustomEquals {
    (input1: string, input2: number): boolean;
}

let equals: CustomEquals = (i1, i2) => parseInt(i1) === i2;

console.log(equals("25", 25));
console.log(equals("12", 25));
