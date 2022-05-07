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





