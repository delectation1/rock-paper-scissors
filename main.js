

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


function game(result) {

    // update counters
    if (result.substring(4,8) == "win!") {
        playerWins += 1;
        let player = document.querySelector(".player");
        player.textContent = `Player: ${playerWins}`;
    }
    else if (result.substring(4,8) == "lose") {
        computerWins += 1;
        let computer = document.querySelector(".computer");
        computer.textContent = `Computer: ${computerWins}`;
    }

    // print information to webpage
    let results = document.querySelector(".results");
    results.textContent = result;

    let winner = document.querySelector(".winner");

    counter++; 
    let games = document.querySelector(".games");
    games.textContent = `Game ${counter}`;

    // evaluate who won the best of 5
    if (playerWins > computerWins) {
        return winner.textContent = "Player wins!";
    }
    else if (playerWins == computerWins) {
        return winner.textContent = "It is a tie!";
    }
    else {
        return winner.textContent = "Computer wins!";
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach( (button) => button.addEventListener('click', (e) => {
    let computerSelection = getComputerChoice();
    let userInput = e.target.className;
    let playerSelection = userInput.toLowerCase();
    let result = playRound(playerSelection, computerSelection);
    game(result);
}));
