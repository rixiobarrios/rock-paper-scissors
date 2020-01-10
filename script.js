// PROJECT 1 // ROCK PAPER SCISSORS GAME

//start the game/button
const playButton = document.querySelector('.intro button');
const introScreen = document.querySelector('.intro');
playButton.addEventListener('click', function() {
    introScreen.style.display = 'none';
});

//score
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//reset scores
function resetScores() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('draw-score').innerText = drawScore;
}

//screen transitions
//<---- w3schools ---->
const winButton = document.querySelector('.win button');
const winScreen = document.querySelector('.win');
winButton.addEventListener('click', function() {
    winScreen.style.display = 'none';
    resetScores();
    resetHands();
    resetMessage();
});

const loseButton = document.querySelector('.lose button');
const loseScreen = document.querySelector('.lose');
loseButton.addEventListener('click', function() {
    loseScreen.style.display = 'none';
    resetScores();
    resetHands();
    resetMessage();
});
const drawButton = document.querySelector('.draw button');
const drawScreen = document.querySelector('.draw');
drawButton.addEventListener('click', function() {
    drawScreen.style.display = 'none';
    resetScores();
    resetHands();
    resetMessage();
});

//player objects
const playerHand = document.querySelector('#player-hand');
const computerHand = document.querySelector('#computer-hand');

//reset hands
function resetHands() {
    playerHand.src = './img/rock_left.png';
    computerHand.src = './img/rock.png';
}

//reset announcement
function resetMessage() {
    document.getElementById('announcement').innerText = 'READY TO PLAY ?';
}

//player choses from three options/buttons
//add event listeners
//tell the computer when to respond
//<---- MDN syntax ---->
let playerChoice;

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', handleClick);

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', handleClick);

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', handleClick);

//slowdown response
//add animation
//<---- w3schools ---->
function handleClick(event) {
    playerHand.src = './img/rock_left.png';
    computerHand.src = './img/rock.png';
    playerChoice = event.target.innerText;
    playerHand.classList.add('shake');
    computerHand.classList.add('shake');
    setTimeout(function() {
        playerHand.classList.remove('shake');
        computerHand.classList.remove('shake');
        computerPlay();
    }, 1500);
}

//create an array with the three elements to chose from
//generate a random simulated computer response
//store computers choice in a variable
//<---- geeksforgeeks syntax ---->
choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    calculateResults();
}

//we compare the choices
//determine and declare winner
//update screen message
//<---- w3schools syntax ---->
//<---- MDN syntax ---->
function calculateResults() {
    if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = 'YOU WIN!!!';
        playerScore += 1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        document.getElementById('announcement').innerText = 'YOU WIN!!!';
        playerScore += 1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = 'YOU WIN!!!';
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
    // announcement animation <-------  to do!!!!
    // function handleClick(event) {
    //     playerHand.src = './img/rock_left.png';
    //     computerHand.src = './img/rock.png';
    //     document.getElementById('announcement').innerText;
    //     playerChoice = event.target.innerText;
    //     playerHand.classList.add('shake');
    //     computerHand.classList.add('shake');
    //     setTimeout(function() {
    //         playerHand.classList.remove('shake');
    //         computerHand.classList.remove('shake');
    //         computerPlay();
    //     }, 1500);
    // }
    // new idea. turn animation on when message comes on
    // function jumpMessage() {
    //     document.getElementById('announcement').innerText;
    //     drawScreen.style.animation - iteration - count='none';
    // }

    //image representation for user and computer
    replacePlayerImage();
    replaceComputerImage();
    document.getElementById('draw-score').innerText = drawScore;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    displayResults();
}

//stop score
//declare results
//<---- teamtreehouse ---->
function displayResults() {
    if (playerScore === 3) {
        winScreen.style.display = 'flex';
    } else if (computerScore === 3) {
        loseScreen.style.display = 'flex';
    } else if (drawScore === 3) {
        drawScreen.style.display = 'flex';
    }
}
// clear score
//change images per turn
//<---- MDN ---->
function replacePlayerImage() {
    if (playerChoice === 'Rock') {
        playerHand.src = './img/rock_left.png';
    } else if (playerChoice === 'Paper') {
        playerHand.src = './img/paper_left.png';
    } else if (playerChoice === 'Scissors') {
        playerHand.src = './img/scissors_left.png';
    }
}

function replaceComputerImage() {
    if (computerChoice === 'Rock') {
        computerHand.src = './img/rock.png';
    } else if (computerChoice === 'Paper') {
        computerHand.src = './img/paper.png';
    } else if (computerChoice === 'Scissors') {
        computerHand.src = './img/scissors.png';
    }
}
