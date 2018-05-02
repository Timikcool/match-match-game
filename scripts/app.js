import setCards from './setCards';
import customOnLoad from './customOnLoad';
import endGame from './endGame';
import changeCover from './changeCover';

let activeCards = [];

let currentCover = 'default-cover';

let startGameButton = document.querySelector('.start-the-game-button');
let timeKeeper = 0;

startGameButton.addEventListener('click', () => {
    globalWrapper.removeChild(document.querySelector('.game-rules-wrapper'));
    let intervalId = setInterval(() => {
        timeKeeper++;
        document.querySelector('.time-keeper').textContent++;
        if (numberOfCards == 0) {
            endGame(timeKeeper);
            clearInterval(intervalId);
        }
    }, 1000);
});



window.onload = customOnLoad();


let numberOfCardsSelector = document.querySelector('.number-of-cards-section input');

let numberOfCards = numberOfCardsSelector.value;

let numberOfCardsCounter = document.querySelector('.number-of-cards-section label');

numberOfCardsSelector.addEventListener('change', () => {
    numberOfCards = numberOfCardsSelector.value;
    numberOfCardsCounter.textContent = `${numberOfCards}`;
    console.log('#numberOfCards', numberOfCards);
});


let numberOfCardsApplyButton = document.querySelector(".number-of-cards-apply-button");

numberOfCardsApplyButton.addEventListener('click', () => {
    console.log(`#set ${numberOfCards} cards`);
    setCards(numberOfCards);
});

let coverBoris = document.querySelector('.cover-select-section .cover-boris');
let coverMihail = document.querySelector('.cover-select-section .cover-mihail');
let coverVladiir = document.querySelector('.cover-select-section .cover-vladimir');

let gameField = document.querySelector(".game-field-section");


coverBoris.addEventListener('click', () => {
    changeCover('cover-boris');
    console.log('#cover Boris is here!');
});

coverMihail.addEventListener('click', () => {
    changeCover('cover-mihail');
    console.log('#cover Mihail is here!');
});

coverVladiir.addEventListener('click', () => {
    changeCover('cover-vladimir');
    console.log('#cover Vladimir is here!');
});