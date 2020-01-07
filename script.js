// PROJECT 1

//start the game/button
// let startGame()
//score
let playerScore = 0;
let computerScore = 0;
//user choses from three options/buttons
//<---- MDN syntax ---->
let playerChoice;

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function(event) {
    console.log('The rock button has been clicked');
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
    computerPlay();
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function(event) {
    console.log('The paper button has been clicked');
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
    computerPlay();
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function(event) {
    console.log('The scissors button has been clicked');
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
    computerPlay();
});
//1. need to add event listeners

//2. define options with a class name for each element

//3. store the player's choice in a variable
// let playerChoice =

// let computerChoice =

//4. tell the computer that is its turn
//     let computerChoice =
//computer choses
//1. create an array with the three elements to chose from
//     let optionsToSelect = ['rock', 'paper', 'scissors'];
//2. generate a random response using math.random(google get a random element from an array)
//<---- geeksforgeeks syntax ---->
arr = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
function computerPlay() {
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    console.log(computerChoice);
    calculateResults();
}

//3. store computers choice in a variable
// computerChoice = [];
//we compare the choices
//1. possible use a switch statement or if statement
//<---- w3schools syntax ---->

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

//determine and declare winner

//1. update the screen possible use innerText and
// .innerText
//increase score
//1. possibly use the incrementor or a counter
//<---- teamtreehouse ---->
computerScore += 1;
playerScore += 1;
//i++
//stop score
// for (let counter = 1; counter < 9; counter++) {
// clear score
//<---- teamtreehouse ---->
// const clearScore() {
//     playerScore = 0;
//     computerScore = 0;
// }
