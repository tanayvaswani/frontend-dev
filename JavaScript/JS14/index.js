// Scope - var, let & const

// legacy code upto 2015
// var x = 1;
// var x = 2;
// console.log(x); // Doesn't give the error!

// let z = 1;
// let z = 2;
// console.log(z); // Error!

// Use "let" when you wanna reassign the value
// let z = 1;
// z = 2;
// console.log(z); // No Error!

// const c = 1;
// const c = 2;
// console.log(x); // Error!

// const c = 1;
// c = 2;
// console.log(x); // Error!

// ----------------------------------------------------

// ------ GLOBAL SCOPE -------------

// var x = 1;
// let y = 2;
// const z = 1;

// ----------- LOCAL SCOPE -------------

// TYPE1: Block Scope
// {
//     let y = 40;
//     console.log(y);
// }

// TYPE2: Function Scope
// function myFunc() {
//     const z = 47;
//     console.log(z);
// }
// myFunc();

// TYPE3: Block inside a function
// function myFunction() {
//     const m = 49;
//     console.log(y);

//     {
//         let y = 100;
//         console.log(y);
//     }
// }
// myFunction();

// Gloabl Scope
var x = 10; // Function Scoped
let y = 20; // Block Scoped
const z = 30;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 100;
  let y = 200;
  const z = 300;
  {
    var x = 101; // Function Scoped
    let y = 201; // Block Scoped
    const z = 301; // Block Scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

}

myFunc();


