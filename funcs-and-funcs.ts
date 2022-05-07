// Function Parameter----------------------------------------------------------------

export function printToFile (text: string, callback: () => void): void {
    console.log(text);
    callback();
}

//Function with params----------------

