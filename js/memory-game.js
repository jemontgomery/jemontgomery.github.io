const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.getElementById("result")
const missesDisplay = document.getElementById("misses")
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.setAttribute('style', "border: 1px solid black")
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }   
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');

    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        alert('you clicked the same image twice')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
        let misses = parseInt(missesDisplay.textContent)
        misses++;
        missesDisplay.textContent = misses;
    } else if (cardsChosen[0] == cardsChosen[1]) {
        console.log('Its a match!!!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen);
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
                let misses = parseInt(missesDisplay.textContent)
        misses++;
        missesDisplay.textContent = misses;
    }
    resultDisplay.textContent = cardsWon.length + " matches found!"
    cardsChosen = [];
    cardsChosenIds = [];
    
    // console.log(`cardsWon.length = ${cardsWon.length} cardArray.length/2 = ${cardArray.length/2}`)
    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'You found them all!'
    }
}

function flipCard() {
    const id = this.getAttribute('data-id');
    cardsChosen.push(cardArray[id].name)
    cardsChosenIds.push(id)
    // const card = document.getElementById(id);
    this.setAttribute('src',cardArray[id].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);

    }
}