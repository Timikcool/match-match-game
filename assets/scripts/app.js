let gameField = document.querySelector(".game-field-section");
let globalWrapper = document.querySelector('div.wrapper');
let form = document.querySelector('form');
let welcomeMessageWrapper = document.querySelector(".welcome-message-wrapper");
let welcomeMessageAlert = document.querySelector(".welcome-message-div");

globalWrapper.removeChild(welcomeMessageWrapper);

let countriesArray = ["ar", "us", "ua", "tr", "ru", "pt", "nl", "kp", "jp", "ge", "gb", "es", "fr", "dk", "de", "cz", "cn", "ca", "by", "at"]
/*welcomeMessageWrapper.appendChild(welcomeMessageAlert);
globalWrapper.appendChild(welcomeMessageWrapper);

function login(name,email){
    globalWrapper.removeChild(welcomeMessageWrapper);
    window.localStorage.userName = name;
    window.localStorage.userEmail = email;
}

form.onsubmit = () => {
    let name = form.elements.name.value;
    let email = form.elements.email.value;
    
    login(name, email);
} */


let numberOfCardsSelector = document.querySelector('.number-of-cards-section input');

let numberOfCards = numberOfCardsSelector.value;

let numberOfCardsCounter = document.querySelector('.number-of-cards-section label');

numberOfCardsSelector.addEventListener('change', () => {
    numberOfCards = numberOfCardsSelector.value;
    numberOfCardsCounter.textContent = `${numberOfCards}`;
    console.log('#numberOfCards', numberOfCards);
})


let numberOfCardsApplyButton = document.querySelector(".number-of-cards-apply-button");

numberOfCardsApplyButton.addEventListener('click', () => {
    console.log(`#set ${numberOfCards} cards`);
    setCards(numberOfCards);
});

function setCards(value) {
    let deck = [];

    while (gameField.lastChild) {
        gameField.removeChild(gameField.lastChild); // очищаем стол
    }

    let shuffledCountries = shuffle(countriesArray); // тусуем картинки

    for (let i = 0; i < value / 2; i++) {
        deck.push(createCard(shuffledCountries[i]));
        deck.push(createCard(shuffledCountries[i])); // создаём колоду по две карты с одинаковыми картинками
    }

    let shuffledDeck = shuffle(deck); // тусуем колоду
    for (let i = 0; i < shuffledDeck.length; i++) {
        gameField.appendChild(shuffledDeck[i]); // выкладываем карты на стол
    }
}


function createCard(country) {
    let card = document.createElement('div');
    card.classList.add(country);
    card.classList.add('card');
    card.classList.add('closed') //задаём картинку и закрываем карту

    card.addEventListener('click', () => { //активация/деактивация карт по клику/второму клику
        //TODO: toggle vs if else
        if (card.classList.contains('closed')) {
            activateCard(card);
        } else if (card.classList.contains('active')) {
            deactivateCard(card);
        }
    });

    return card;
}

function activateCard(card) {
    console.log(`#card ${card.classList[0]} is active now!`);
    card.classList.remove('closed');
    card.classList.remove(currentCover);
    card.classList.add('active');

    activeCards.push(card);

    if (activeCards.length == 2 && activeCards[0] != activeCards[1]) {
        if (activeCards[0].classList[0] == activeCards[1].classList[0]) { //проверка одинаковы ли страны
            match();
        } else {
            mismatch();
        }
    }

}

function match() {
    console.log('#match!');
    activeCards.forEach(item => gameField.removeChild(item));
    activeCards = [];
    counterMatches++;
}

function mismatch() {
    activeCards.forEach(item => deactivateCard(item));
    activeCards = [];
}

function deactivateCard(card) {
    card.classList.remove('active');
    card.classList.add('closed');
    card.classList.add(currentCover);
    console.log(`#card ${card.classList[0]} deactivated!`);
}

let counterMatches = 0;
let activeCards = [];


function changeCover(cover) {

    for (let i = 0; i < gameField.children.length; i++) {
        gameField.children[i].classList.remove(currentCover);
        gameField.children[i].classList.add(cover);
    }

    currentCover = cover;
}

let currentCover = 'default-cover';

coverBoris = document.querySelector('.cover-select-section .cover-boris');
coverMihail = document.querySelector('.cover-select-section .cover-mihail');
coverVladiir = document.querySelector('.cover-select-section .cover-vladimir');

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

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}