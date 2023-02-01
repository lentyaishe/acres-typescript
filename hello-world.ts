const helloAkko: string = "Hello Akko!!";
let array: number[] = [];

console.log(helloAkko);

enum Status {
    Normal = "style-normal",
    Good = "style-good",
    Warning = "style-warning",
    Error = "style-error"
}

enum CreditCards {
    Visa = 1,
    AmericanExpress = "am" // ???
}

const num: string = Status.Normal;

const cc: CreditCards = CreditCards.AmericanExpress;
console.log(cc.toString());

const person = {
    name: "Ilya",
    age: 43
};

console.log(typeof person);