// Your first code challenge 

// Write a program that will provide a random letter from your name 

var n = Math.floor(Math.random() * 5);
console.log("tanay".charAt(n));

console.log(n + 1);

// Lets make this work for any name 

const anyName = "Tanveer";
var x = Math.floor(Math.random() * anyName.length);
console.log(anyName.charAt(x))
console.log(x + 1);
