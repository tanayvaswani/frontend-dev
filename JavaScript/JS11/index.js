// First Game in JS

let playGame = confirm("Shall we play Rock, Paper & Scissor?");
if (playGame) {
    // play
    let playerChoice = prompt("Please enter Rock/Paper/Scissor");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissor") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerChoice === 1 ? "rock"
                    : computerChoice === 2 ? "paper"
                    : "scissor";

            let result =
                playerOne === computer ? "Tie game!"

                    : playerOne === "rock" && computer === "paper" ? `P = ${playerOne} and C = ${computer}\n Computer Wins!`
                    : playerOne === "paper" && computer === "scissor" ? `P = ${playerOne} and C = ${computer}\n Computer Wins!`
                    : playerOne === "scissor" && computer === "rock" ? `P = ${playerOne} and C = ${computer}\n Computer Wins!`
                    : `P = ${playerOne} and C = ${computer}\n Player One Wins!`;

            alert(result);

            let playAgain = confirm("Do you wanna play again?");
            playAgain ? location.reload() : alert("Okay, Thanks for playing!");
        }
        else {
            alert("You've entered the wrong input, please enter Rock/Paper/Scissor!");
        }
    }
    else {
        alert("I guess you changed your mind, maybe next time!");
    }
}
else {
    alert("Okay, maybe next time!");
}
