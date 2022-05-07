//SPECIFYING TYPES-------------------------------------------

let userName: string = "Monika";
let hasLoggedIn: boolean = true;

userName += " Singh";

console.log(userName);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;


//Typing Array----------------------

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4];

//Typing Object---------------------

const myPerson: {
    first: string,
    last: string
} = {
    first: "Monika",
    last: "Singh"
}
// or we can define the type at once, so that when we need to change it, it will change everywhere.

interface Person {
    first: string,
    last: string
}

const personName: Person = {
    first: "Jim",
    last: "Carry"
}


const ids: Record<number, string> = {
    10: "a",
    20: "b"
}
ids[30] = "c";


//Conditional & Expressions------------------

if(ids[30] === "D"){
}

//Loops----------------

for (let i = 0; i < 10; i++) {
    console.log(i);
}
//NOTE: there's no need to define type of i in for loop because it is inferred

[1, 2, 3, 4].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((v) => v * 10);






