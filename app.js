const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const winDisplay = document.getElementById('wins')
const loseDisplay = document.getElementById('losses')
const drawDisplay = document.getElementById('draws')
let computerChoice, userChoice;

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerChoiceDisplay.innerHTML = generateComputerChoice();
    checkResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.random();
    computerChoice = '';
    if (randomNumber < 0.3333) {
        computerChoice = 'rock'
    } else if (randomNumber <= 0.66666) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice
}

function checkResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = 'It\'s a tie!'
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'You Win!'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'You Lose!'
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'You Lose!'
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'You Win!'
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'You Win!'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'You Lose!'
    }
    score();
}

function score() {
    if (resultDisplay.innerHTML === 'You Win!') {
        let win = parseInt(winDisplay.innerHTML)
        win++
        winDisplay.innerHTML = win
    } else if (resultDisplay.innerHTML === 'You Lose!') {
        let lose = parseInt(loseDisplay.innerHTML)
        lose++
        loseDisplay.innerHTML = lose
    } else {
        let draw = parseInt(drawDisplay.innerHTML)
        draw++
        drawDisplay.innerHTML = draw
    }
}