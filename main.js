

function getComputerChoice() {
    /* store rock paper scissors in an array */
    let choices = ["rock", "paper", "scissors"];

    /* pick a random number from 0 to 2*/
    let randomNumber = Math.floor(Math.random() * choices.length);

    /* return our choice */
    return choices[randomNumber];
}


// evaluate player selection -> move into a nested loop 
// if player wins, print You Win, (playerSelection) beats (computerSelection)
// if player loses, print You Lose, 

function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection;
    let computerChoice = computerSelection;

    if (playerChoice == "rock") {

        // evaluate win
        if (computerChoice == "scissors") {
            return "You win! Rock beats Scissors";
        }

        // evaluate tie 
        else if (computerChoice == "rock") {
            return "You tie! Rock ties Rock";
        }

        // evaluate loss
        else {
            return "You lose! Paper beats Rock";
        }
    }

    else if (playerChoice == "paper") {
    
        // evaluate win
        if (computerChoice == "rock") {
            return "You win! Paper beats Rock";
        }

        // evaluate tie 
        else if (computerChoice == "paper") {
            return "You tie! Paper ties Paper";
        }

        // evaluate loss
        else {
            return "You lose! Scissors beats Paper";
        }
    }

    // scissors
    else {

        // evaluate win
        if (computerChoice == "paper") {
            return "You win! Scissors beats Paper";
        }

        // evaluate tie 
        else if (computerChoice == "scissors") {
            return "You tie! Scissors ties Scissors";
        }

        // evaluate loss
        else {
            return "You lose! Rock beats Scissors";
        }
    }
}



function game() {

    /* initialize variables outside loop scope playerWins computerWins and nubmer of games*/
    let playerWins = 0;
    let computerWins = 0;
    const NUMBER_OF_GAMES = 5;

    for (let i = 0; i < NUMBER_OF_GAMES; i++) {
        /* initialize variables within loop scope to store the player choice and computer choice */
        let userInput = prompt("Please type from Rock, Paper or Scissors");
        let playerSelection = userInput.toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        // update counters
        if (result.substring(4,8) == "win!") {
            playerWins += 1;
        }
        else if (result.substring(4,8) == "lose") {
            computerWins += 1;
        }

        // tie has no evaluation as the counter just needs to be raised
        console.log(result);
        console.log(`Player: ${playerWins}`);
        console.log(`Computer: ${computerWins}`);
    }

    // evaluate who won the best of 5
    if (playerWins > computerWins) {
        return "Player wins!"
    }
    else if (playerWins == computerWins) {
        return "It is a tie!"
    }
    else {
        return "Computer wins!"
    }
}
