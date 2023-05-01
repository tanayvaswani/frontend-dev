// Error and Error Handling in JS 


"use strict"; // this will take care of syntax 
const variable = "Tanay";
console.log(variable);

// Object..create();

// const name = "Tanay";
// name = "tanay";

// const makeError = () => {
//   try {
//     const name = "tanay";
//     name = "Tanay_Vaswani";
//   }
//   catch (err) {
//     console.error(err);
//     console.error(err.message);
//     console.error(err.stack);
//     console.warn(err);

//   } // catchID can be e/err/error
// }

// makeError();


const makeError = () => {
  try {
    throw new customError("This is a custom error!")
  }
  catch (err) {
    // console.error(err);
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
    // console.warn(err);

  } // catchID can be e/err/error
}

makeError();

//custom error

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`
}

