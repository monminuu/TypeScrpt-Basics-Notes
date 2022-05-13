function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something more");

interface User {
    id: string;
    info?: {
        email?: string;
    };
}

function getEmail(user: User): string {
    if (user.info) {
        return user.info.email!; // ! will make sure that user.info.email is not null
    }
    return "";
}

// Though ! is not a very good practice. So here is another way to write this function.
//Here we are using optional chaining feature
function getEmailEasy(user: User): string {
    return user?.info?.email ?? ""; //If user exist go to info, if info exist, go to email & if email is null then return empty string
}

//Optional Callback
function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x, y]);
    callback?.();
}