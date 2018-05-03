import setCards from './setCards';
import customOnLoad from './customOnLoad';
import endGame from './endGame';
import changeCover from './changeCover';


let currentCover = 'default-cover';

let startGameButton = document.querySelector('.start-the-game-button');
let timeKeeper = 0;

let globalWrapper = document.querySelector('.wrapper');

startGameButton.addEventListener('click', () => {
    globalWrapper.removeChild(document.querySelector('.game-rules-wrapper'));
    let intervalId = setInterval(() => {
        timeKeeper++;
        document.querySelector('.time-keeper').textContent++;
        if (gameField.numberOfCards == 0) {
            endGame(timeKeeper);
            clearInterval(intervalId);
        }
    }, 1000);
});



window.onload = customOnLoad();

let gameField = {};
gameField.elem = document.querySelector(".game-field-section");
gameField.activeCards = [];

let numberOfCardsSelector = document.querySelector('.number-of-cards-section input');

gameField.numberOfCards = numberOfCardsSelector.value;

let numberOfCardsCounter = document.querySelector('.number-of-cards-section label');

numberOfCardsSelector.addEventListener('change', () => {
    gameField.numberOfCards = numberOfCardsSelector.value;
    numberOfCardsCounter.textContent = `${gameField.numberOfCards}`;
    console.log('#numberOfCards', gameField.numberOfCards);
});



let numberOfCardsApplyButton = document.querySelector(".number-of-cards-apply-button");

numberOfCardsApplyButton.addEventListener('click', () => {
    console.log(`#set ${gameField.numberOfCards} cards`);
    setCards(gameField);
});

let coverBoris = document.querySelector('.cover-select-section .cover-boris');
let coverMihail = document.querySelector('.cover-select-section .cover-mihail');
let coverVladiir = document.querySelector('.cover-select-section .cover-vladimir');


coverBoris.addEventListener('click', () => {
    currentCover = changeCover('cover-boris', currentCover);
    console.log('#cover Boris is here!');
});

coverMihail.addEventListener('click', () => {
    currentCover = changeCover('cover-mihail', currentCover);
    console.log('#cover Mihail is here!');
});

coverVladiir.addEventListener('click', () => {
    currentCover = changeCover('cover-vladimir', currentCover);
    console.log('#cover Vladimir is here!');
});