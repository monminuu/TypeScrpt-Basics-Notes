interface Coordinate {
    x: number,
    y: number
}

// Implementation

function parseCoordinateFromObject (obj: Coordinate): Coordinate {
    return {
        ...obj,
    }
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y,
    }
}

// FUNCTION OVERLOADING-----------
// We can also write the above two functions as follows:

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;


// Why a question mark after arg2? "?" is used to make arg2 an optional argument.
// Why arg2 is optional here? coz in the above function ( obj) is a single params & (x, y) are two params, so ? implies that we can you either one or both params
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y:0,
    };

    if (typeof arg1 === "object"){
        coord = {
            ...(arg1 as Coordinate),
        };
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        };
    }

    return coord;
}

console.log(parseCoordinate(80, 70));


