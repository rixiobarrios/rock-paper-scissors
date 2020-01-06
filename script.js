// PROJECT 1

//start the game/button
// let startGame()
//user choses from three options/buttons
//<---- MDN syntax ---->
const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function(event) {
    console.log('The rock button has been clicked');
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function(event) {
    console.log('The paper button has been clicked');
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function(event) {
    console.log('The scissors button has been clicked');
});

//1. need to add event listeners

//2. define options with a class name for each element

//3. store the user's choice in a variable
// let playerChoice =

//4. tell the computer that is its turn
//     let computerChoice =
//         //computer choses
//         //1. create an array with the three elements to chose from
//     let optionsToSelect = ['rock', 'paper', 'scissors'];
// //2. generate a random response using math.random(google get a random element from an array)
// //<---- geeksforgeeks syntax ---->
result = [4];
arr = [1, 2, 3];

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
// let(playerChoice) {
//     switch (answer) {
//         case 'rock' === 'scissors':
//         case 'paper' === 'rock':
//         case 'scissors' === 'paper':
//             answer = 'You Win!';
//             break;
//         case 'rock' === 'paper':
//         case 'paper' === 'scissors':
//         case 'scissors' === 'rock':
//             answer = 'You Lose';
//             break;
//         case 'rock' === 'rock':
//         case 'paper' === 'paper':
//         case 'scissors' === 'scissors':
//             answer = 'Its a Draw';
//             break;
//     }
// }
//<---- MDN syntax ---->
// function choice() {
//     if 'rock' === 'rock';
//     return 'Its a draw';
// } else {
//     return 'You win!';
// }
//determine and declare winner
//1. update the screen possible use innerText and
// .innerText
//increase score
//1. possibly use the incrementor
//i++
