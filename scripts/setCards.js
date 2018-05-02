import shuffle from './shuffle';
import createCard from './createCard';

let countriesArray = ["ar", "us", "ua", "tr", "ru", "pt", "nl", "kp", "jp", "ge", "gb", "es", "fr", "dk", "de", "cz", "cn", "ca", "by", "at"];
let gameField = document.querySelector(".game-field-section");
export default function setCards(value) {
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