export default function endGame(time) {

    score = document.querySelector('.score-counter').textContent;
    name = window.localStorage.getItem('userName');

    window.localStorage.setItem(`results`, results + `${name}:${score};`);

    let refresh = confirm(`CONGRATULATIONS, ${name}! Your score is ${score} in ${time}s!`);

    if(refresh){
        location.reload();
    }

}