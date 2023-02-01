type Person = {
    name: string;
    age?: {
        years: number;
        months: number;
    };
    isAlive: boolean;
    birthdate: Date;
}

interface IPerson {
    name: string;
    age: number;
    isAlive: boolean;
    birthdate: Date;
}

const teacher: Person = {
    name: "John Doe",
    isAlive: true,
    birthdate: new Date()
};

console.log(teacher.hasOwnProperty("name"));
console.log(teacher.hasOwnProperty("age"));

teacher.name = "Jane";
teacher["hi"] = "John";

console.log(teacher.hasOwnProperty("hi"));

// console.log(teacher.age.years);

// const student: IPerson = {

// }