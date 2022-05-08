// Function Parameter----------------------------------------------------------------

export function printToFile (text: string, callback: () => void): void {
    console.log(text);
    callback();
}


//Functions as type--------------------

export type MutationFunction = (v: number) => number;


//Function with params----------------

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate);
}


console.log(arrayMutate([1, 2, 3], (v) => v * 10));

//exporting MutationFunction to another function

const newMutateFunc: MutationFunction = (v: number) => v * 100;

//Returning Function----------------

export function createAdder(num: number) {
    return (val: number) => num + val;
}

const addOne = createAdder(1);

console.log(addOne(65));