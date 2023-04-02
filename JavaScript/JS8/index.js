// Switch case statements

// switch (expression or value) {

//     case choice1:
//         // run this code
//         break;

//     case choice2:
//         // run this code 
//         break;

//     // add as many cases as you want 

//     default:
//         // run this if no case matches
//         // no need to adding a break here 
// } 


// switch (Math.floor(Math.random() * 5 + 1)) {

//     case 1:
//         console.log(1);
//         break;

//     case 2:
//         console.log(2);
//         break;

//     case 3:
//         console.log(3);
//         break;

//     default:
//         console.log("No match!");
// } 



let playerOne = "rock";
let computer = "paper";

switch (playerOne) {

    case computer:
        console.log("Tie!");
        break;

    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        }
        else {
            console.log("Player wins!");
        }
        break;

    case "paper":
        if (computer === "scissor") {
            console.log("Computer wins!");
        }
        else {
            console.log("Player wins!");
        }
        break;

    case "scissor":
        if (computer === "rock") {
            console.log("Computer wins!");
        }
        else {
            console.log("Player wins!");
        }
        break;

    default:
        console.log("Please enter a valid input.")
}