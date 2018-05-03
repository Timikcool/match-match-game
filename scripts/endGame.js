export default function endGame(time) {
    let results = window.localStorage.getItem('results');
    
    if(!results){
        results = ' ';
    }

    let score = document.querySelector('.score-counter').textContent;
    let name = window.localStorage.getItem('userName');

    window.localStorage.setItem(`results`, results + `${name}:${score};`);

    let refresh = confirm(`CONGRATULATIONS, ${name}! Your score is ${score} in ${time}s!`);

    if (refresh) {
        location.reload();
    }

}