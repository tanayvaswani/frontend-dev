// Loops in JS

let myNumber = 0;

// while (myNumber <= 50) {
//     myNumber += 2;
//     console.log(myNumber);
// }

// do {
//     console.log(myNumber)
//     myNumber += 2;
// } while (myNumber <= 50)

// let naam = "tanay";
// for (let i = 0; i <= naam.length; i++) {
    //   console.log(naam.charAt(i));
    // }
    

let name = "tanay";
let counter = 0;
let myLetter;
while (counter <= 4) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "n") break;
    counter++;
}
console.log(counter);