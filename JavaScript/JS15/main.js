// Arrays

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];

// const newArray = myArray.slice(2, 5);
// console.log(newArray);

// myArray.reverse();
// console.log(myArray);

// const newString = myArray.join();
// console.log(newString);

// const newArray = myArrayB.concat(myArrayA);
// console.log(newArray);

// const newArray = [...myArrayA, ...myArrayB]; // pulls the individual values and put them together in a new array!
// const newArray_1 = [myArrayA, myArrayB]; // contains a nested array

// console.log(newArray);
// console.log(newArray_1);

// NESTED ARRAY

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketballs", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jersey"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
// OR
console.log(clothesShelfB[2]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][2]);

const sportsStore = [equipDept, clothesDept];

console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][2]);
