// PROJECT 1

//start the game/button
// let startGame()
//score
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//player choses from three options/buttons
//add event listeners
//tell the computer when to respond
//<---- MDN syntax ---->
let playerChoice;

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function(event) {
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
    computerPlay();
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function(event) {
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
    computerPlay();
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function(event) {
    playerChoice = event.target.innerText;
    console.log('playerChoice', playerChoice);
    computerPlay();
});

//create an array with the three elements to chose from
//generate a random simulated computer response using math.random
//store computers choice in a variable
//<---- geeksforgeeks syntax ---->
choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    calculateResults();
}

//we compare the choices use a switch statement or if statement
//determine and declare winner
//update the screen possible use innerText
//<---- w3schools syntax ---->
//<---- MDN syntax ---->
function calculateResults() {
    if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = 'PLAYER WINS!';
        playerScore += 1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        document.getElementById('announcement').innerText = 'PLAYER WINS!';
        playerScore += 1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = 'PLAYER WINS!';
        playerScore += 1;
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = 'YOU LOSE';
        computerScore += 1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        document.getElementById('announcement').innerText = 'YOU LOSE';
        computerScore += 1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        document.getElementById('announcement').innerText = 'YOU LOSE';
        computerScore += 1;
    } else if (playerChoice === 'Rock' && computerChoice === 'Rock') {
        document.getElementById('announcement').innerText = "IT'S A DRAW";
        drawScore += 1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = "IT'S A DRAW";
        drawScore += 1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors') {
        document.getElementById('announcement').innerText = "IT'S A DRAW";
        drawScore += 1;
    }
    replacePlayerImage();
    replaceComputerImage();
    document.getElementById('draw-score').innerText = drawScore;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    displayResults();
}

//stop score
// clear score
//<---- teamtreehouse ---->
function displayResults() {
    if (playerScore === 9) {
        alert('YOU WON THE MATCH!');
    } else if (computerScore === 9) {
        alert('GAME OVER');
    } else if (drawScore === 9) {
    }
}
//change images

function replacePlayerImage() {
    if (playerChoice === 'Rock') {
        document.getElementById('player-hand').src = '/img/rock_left.png';
    } else if (playerChoice === 'Paper') {
        document.getElementById('player-hand').src = '/img/paper_left.png';
    } else if (playerChoice === 'Scissors') {
        document.getElementById('player-hand').src = '/img/scissors_left.png';
    }
}

function replaceComputerImage() {
    if (computerChoice === 'Rock') {
        document.getElementById('computer-hand').src = '/img/rock.png';
    } else if (computerChoice === 'Paper') {
        document.getElementById('computer-hand').src = '/img/paper.png';
    } else if (computerChoice === 'Scissors') {
        document.getElementById('computer-hand').src = '/img/scissors.png';
    }
}
