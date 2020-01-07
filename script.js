// PROJECT 1

//start the game/button
// let startGame()
playerScore = 0;
computerScore = 0;
//user choses from three options/buttons
//<---- MDN syntax ---->
let playerChoice;

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function(event) {
    console.log('The rock button has been clicked');
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function(event) {
    console.log('The paper button has been clicked');
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function(event) {
    console.log('The scissors button has been clicked');
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
});
//1. need to add event listeners

//2. define options with a class name for each element

//3. store the player's choice in a variable
// let playerChoice =

// let computerChoice =

//4. tell the computer that is its turn
//     let computerChoice =
//         //computer choses
//         //1. create an array with the three elements to chose from
//     let optionsToSelect = ['rock', 'paper', 'scissors'];
// //2. generate a random response using math.random(google get a random element from an array)
// //<---- geeksforgeeks syntax ---->
result = [];
arr = ['rock', 'paper', 'scissors'];

function computerChoice() {
    result.innerText = arr[Math.floor(Math.random() * arr.length)];
    console.log(result.innerText);
}

computerChoice();
//3. store computers choice in a variable
// computerChoice = [];
//we compare the choices
//1. possible use a switch statement or if statement
//<---- w3schools syntax ---->
// switch (function()) {
//     case 'rock' === 'scissors':
//     case 'paper' === 'rock':
//     case 'scissors' === 'paper':
//         answer = 'You Win!';
//         break;
//     case 'rock' === 'paper':
//     case 'paper' === 'scissors':
//     case 'scissors' === 'rock':
//         answer = 'You Lose';
//         break;
//     case 'rock' === 'rock':
//     case 'paper' === 'paper':
//     case 'scissors' === 'scissors':
//         answer = 'Its a Draw';
//         break;
// }
// console.log(computerChoices);
//<---- MDN syntax ---->
function calculateResults() {
    if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        console.log('player wins');
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        console.log('player wins');
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log('player wins');
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        console.log('computer wins');
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        console.log('computer wins');
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        console.log('computer wins');
    } else if (playerChoice === 'Rock' && computerChoice === 'Rock') {
        console.log('Its a draw');
    } else if (playerChoice === 'Paper' && computerChoice === 'Paper') {
        console.log('Its a draw');
    } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors') {
        console.log('Its a draw');
    }
}

calculateResults();
//determine and declare winner

//1. update the screen possible use innerText and
// .innerText
//increase score
//1. possibly use the incrementor
//i++
//stop score
// for (let counter = 1; counter < 6; counter++) {
//     let userPrompt = prompt('Do you choose heads or tails?');
//     if (userPrompt === 'heads') {
//         console.log("You've chosen heads; the computer chooses tails.");
//     } else if (userPrompt === 'tails') {
//         console.log("You've chosen tails; the computer chooses heads.");
//     } else {
//         console.log(
//             "You've chosen " + userPrompt + ', which is an invalid choice.'
//         );
//     }
// }
////////////
