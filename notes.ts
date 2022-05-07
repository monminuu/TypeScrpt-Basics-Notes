// # Misconception:

// Typescript  enforce types only at compile time & not runtime

// Explanation:
// Suppose there's function called 'getName' in function.ts folder
// Now we have to export this function to js-function.js folder
// by simply importing 'getName' i.e [import getName from './function.ts'] will not work.


// Q. how to import typescript function into javascript folder?
// A. run command: npx tsc function.ts
//      it will give us function.js.
//      ts will compile itself into js force.