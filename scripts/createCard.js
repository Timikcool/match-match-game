import deactivateCard from './deactivateCard';
import activateCard from './activateCard';

export default function createCard(country) {
    let card = document.createElement('div');
    card.classList.add(country);
    card.classList.add('card');
    card.classList.add('closed') //задаём картинку и закрываем карту

    card.addEventListener('click', () => { //активация/деактивация карт по клику/второму клику
        //TODO: toggle vs if else
        if (card.classList.contains('closed') && !card.classList.contains('delete')) {
            activateCard(card);
        } else if (card.classList.contains('active') && !card.classList.contains('delete')) {
            deactivateCard(card);
            if (card == activeCards[0]) { //проверка на повторное нажатие на ту же карту
                activeCards.shift();
            }
        }
    });

    return card;
}