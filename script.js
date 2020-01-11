// PROJECT 1 // ROCK PAPER SCISSORS GAME

//start the game/button/intro screen
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
    // You use these in multiple places so help yourself out by put them in variables at the top  of the page
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
    document.getElementById('announcement').innerText = 'READY TO PLAY?';
}

//player choses from three options/buttons
//add event listeners
//<---- MDN syntax ---->

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', handleClick);

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', handleClick);

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', handleClick);

//tell the computer when to respond
//slowdown response
//add animation
let playerChoice;
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
choices = ['Rock', 'Paper', 'Scissors'];

let computerChoice;
//<---- geeksforgeeks syntax ---->
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
    // Great job getting this to work!  Since this is the largest and most complex of your functions, it would be a great candidate to refactor.  One way to streamline it could be:

    // Store these so you only have to type them once
    const announcement = document.getElementById('announcement');
    const drawScoreElement = document.getElementById('draw-score');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');

    // If both the playerChoice and the computerChoice are the same (it doesn't matter what they are just that they are the equivalent in value)
    if (playerChoice === computerChoice) {
        // Update the drawScore and put a draw message on the board.
        drawScoreElement.innerText = ++drawScore;
        announcement.innerText = "IT'S A DRAW";
        // Otherwise If
        // the player chose Paper and the computer chose Rock OR
        // the player chose Scissors and the computer chose Paper OR
        // the player chose Rock and the computer chose Scissors
        // (these are the only ways that the player can win so if it's not a draw and the player didn't win, then the player lost)
    } else if (
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Rock' && computerChoice === 'Scissors')
    ) {
        // Update the playerScore and put a win message on the board.
        playerScoreElement.innerText = ++playerScore;
        announcement.innerText = 'YOU WIN!!!';
        // Otherwise
    } else {
        // Update the computerScore and put a lost message on the board.
        computerScoreElement.innerText = ++computerScore;
        announcement.innerText = 'YOU LOSE';
    }

    // announcement animation <-------  future feature/work in progress
    // function jumpMessage() {
    //     const announcement = document.getElementById('announcement');
    //     announcement.classList.add('shake');
    // }

    //image representation for user and computer
    replacePlayerImage();
    replaceComputerImage();
    displayResults();
}

//stop score
//declare results
//<---- teamtreehouse ---->
function displayResults() {
    // The winScreen/loseScreen/drawScreen all have the exact same html structure and are mutually exclusive so the better approach here would be to just append the html and set the text based on the win, lose or draw
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

// Here's an area with some opportunity to optimize as well
// There's a good amount of redundant code here and
// a large if block that is only different in the name of
// the image.  Notice that the difference in the name
// is the same as the playerChoice and computerChoice so
// you could use concatenation and toLowerCase() here to
// reduce these two separate functions to one line
// in the computerPlay and playerPlay functions:
// computerHand.src = 'img/' + computerChoice.toLowerCase() + '.png';
// playerHand.src = 'img/' + playerChoice.toLowerCase() + '_left.png';

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
