// DEFINING FUNCTIONS------------------------------------------------------------


//typing return -> addNumbers(a,b): number ||  here number is typing return
function addNumbers(a: number, b: number): number {
    return a + b;
}

//exports
export default addNumbers;

//const function

//by mentioning am empty string, function will accept a single parameter.
export const addStrings = (str1: string, str2: string = ""): string =>
    `${str1} ${str2}`;


//Union Types-------------

export const format = (title: number, param: string | number): string =>
    `${title} ${param}`;

//Void Function--------------

export const printFormat = (title: number, param: string | number) =>
    console.log(format(title, param));

//Promise Function-------------

export const fetchData = (url: string): Promise<string> =>
    Promise.resolve(`Data from ${url}`);

//Rest Parameter---------------

function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
}



