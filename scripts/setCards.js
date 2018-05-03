import shuffle from './shuffle';
import Card from './classes/Card';



export default function setCards(value) {
    let countriesArray = ["ar", "us", "ua", "tr", "ru", "pt", "nl", "kp", "jp", "ge", "gb", "es", "fr", "dk", "de", "cz", "cn", "ca", "by", "at"];
    let gameField = {};
    gameField.elem = document.querySelector(".game-field-section");
    gameField.activeCards = [];
    let deck = [];

    while (gameField.elem.lastChild) {
        gameField.elem.removeChild(gameField.elem.lastChild); // очищаем стол
    }

    let shuffledCountries = shuffle(countriesArray); // тусуем картинки

    for (let i = 0; i < value / 2; i++) {
        deck.push(new Card(shuffledCountries[i], gameField));
        deck.push(new Card(shuffledCountries[i], gameField)); // создаём колоду по две карты с одинаковыми картинками
    }

    let shuffledDeck = shuffle(deck); // тусуем колоду
    for (let i = 0; i < shuffledDeck.length; i++) {
        gameField.elem.appendChild(shuffledDeck[i].elem); // выкладываем карты на стол
    }
}