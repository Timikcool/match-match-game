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

numberOfCardsSelector.addEventListener('change',() => {
    numberOfCards = numberOfCardsSelector.value;
    numberOfCardsCounter.textContent =`${numberOfCards}`;
    console.log('#numberOfCards',numberOfCards);
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

    for (let i = 0; i < value/2; i++) {
        deck.push(createCard(shuffledCountries[i]));
        deck.push(createCard(shuffledCountries[i])); // создаём колоду по две карты с одинаковыми картинками
    }

    let shuffledDeck = shuffle(deck); // тусуем колоду
    for(let i = 0; i < shuffledDeck.length; i++){
        gameField.appendChild(shuffledDeck[i]); // выкладываем карты на стол
    }
}

function createCard(country) {
    let card = document.createElement('div');
    card.classList.add(country);
    card.classList.add('card');
    card.classList.add('closed')  //задаём картинку и закрываем карту
    return card;
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

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