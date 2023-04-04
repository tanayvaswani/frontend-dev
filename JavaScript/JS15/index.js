// Arrays in JS

const myArray = [];

// Add elements to an Array
myArray[0] = "Tanay";
myArray[1] = 24;
myArray[2] = "Blue";
myArray[3] = true;

// Refer to an Array
console.log(myArray);

// // Length of an Array
// console.log(myArray.length);

// // Last element in an Array
// console.log(myArray[myArray.length - 1]);

// myArray.push("School");
// console.log(myArray);

// const lastItem = myArray.pop();
// console.log(lastItem);
// console.log(myArray);

// const newLength = myArray.unshift("Hello!");
// console.log(newLength); // return only length of the array
// console.log(myArray);

// const newLength = myArray.push("Hello!");
// console.log(newLength); // return only length of the array
// console.log(myArray);

// const firstItem = myArray.shift(); // removes the data and the position too
// console.log(firstItem); // return only the value of first item that is removed
// console.log(myArray);
// console.log(myArray);
// console.log(myArray[1]);

// delete myArray[1];
// console.log(myArray); // removes the data but doesn't delete the position
// console.log(myArray[1]); // undefined

// myArray.splice(1, 2);
// splice(start deleting from, number of elements to be deleted)

// console.log(myArray);

myArray.splice(1, 1, "replaced value");

// using splice method dto replace the values.
// splice(start deleting from, number of elements to be deleted(can be equal to 0), replaced element after deleting the element or elements)

console.log(myArray);
