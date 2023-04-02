// Conditionals: If Statement

// let customerIsBanned = true;
// let soup = "Chicken noodle soup";
// let crackers = true;
// let reply;

// if (soup && crackers) {
//     reply = `Here's your order of ${soup} and crackers.`;
// }
// else if (soup) {
//     reply = `Here's your order of ${soup}`;
// }
// else if (customerIsBanned) {
//     reply = "No soup for you!";
// }
// else {
//     reply = "Sorry, we're out of soup";
// }
// console.log(reply)





// let testScore = 49;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//     grade = 'A';
// }
// else if (testScore >= 80) {
//     grade = 'B';
// }
// else if (testScore >= 70) {
//     grade = 'C';
// } 
// else if (testScore >= 60) {
//     grade = 'D';
// }
// else {
//     if (collegeStudent) {
//         grade = 'U';
//     }
//     else {
//         grade = 'F';
//     }
// }

// console.log(grade);





if (playerOne === computer) {
    // tie game
} 
else if (playerOne === "rock") {
    if (computer === "paper") {
        // computer wins
    }
    else {
        // player wins
    }
}
else if (playerOne === "paper") {
    if (computer === "scissor"){
        //computer wins
    }
    else {
        // player wins
    }
}
else {
    if (computer === "rock"){
        //computer wins
    }
    else {
        // player wins
    }
}
