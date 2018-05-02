import mismatch from './mismatch';
import match from './match';

export default function activateCard(card) {
    console.log(`#card ${card.classList[0]} is active now!`);
    card.classList.add('active');

    setTimeout(() => {
        card.classList.remove('closed');
        card.classList.remove(currentCover);
    }, 500);

    setTimeout(() => {

        activeCards.push(card);

        if (activeCards.length == 2 && activeCards[0] != activeCards[1]) {
            if (activeCards[0].classList[0] == activeCards[1].classList[0]) { //проверка одинаковы ли страны
                match();
            } else {
                mismatch();
            }
        }
    }, 1000);
}