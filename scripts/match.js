export default function match() {

    activeCards.forEach(item => item.classList.add('delete'));
    numberOfCards -= 2;
    setTimeout(() => {
        //activeCards.forEach((item) => gameField.removeChild(item)); 
        activeCards = [];
    }, 1000);

    document.querySelector('.score-counter').textContent++;
    console.log('#match!');

}