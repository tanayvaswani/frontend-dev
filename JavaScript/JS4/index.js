// Numbers 
const myNumber = 42;
const myFloat = 42.0111111;
const myString = "42";



console.log(myNumber);
console.log(myNumber === myFloat);
console.log(myFloat);
console.log(myString);


console.log(myString + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Tanay"));


console.log(Number(0));
console.log(Number(1));

console.log(Number.isInteger(myFloat));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myFloat).toFixed(2));
console.log(Number.parseInt(myFloat).toFixed(2));


console.log(Number.parseFloat(myFloat).toString());
console.log(typeof Number.parseFloat(myFloat).toString());

console.log(Number.isNaN("Tanay"));
console.log(isNaN("Tanay"));
// NaN: Not a Number 