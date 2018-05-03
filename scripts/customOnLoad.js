export default function customOnLoad() {
    let globalWrapper = document.querySelector('div.wrapper');
    let form = document.querySelector('form');

    let results = window.localStorage.getItem('results');
    let topTable = document.querySelector('.top-table');

    let welcomeMessageWrapper = document.querySelector(".welcome-message-wrapper");
    let welcomeMessageAlert = document.querySelector(".welcome-message-div");

    welcomeMessageWrapper.appendChild(welcomeMessageAlert);
    globalWrapper.appendChild(welcomeMessageWrapper);


    function succesfullLogin(name, email) {
        globalWrapper.removeChild(welcomeMessageWrapper);
        window.localStorage.setItem('userName', name);
        window.localStorage.setItem('userEmail', email);
    }

    form.onsubmit = () => {
        let name = form.elements.name.value;
        let email = form.elements.email.value;

        succesfullLogin(name, email);
    }

    if (results) {
        let scores = results.match(/\d+/gi);
        let names = results.match(/[a-zа-я]+/gi); //TODO: сортировка и первые 10 онли

        let mapTop = new Map();

        for (let i = 0; i < names.length, i < scores.length; i++) {
            mapTop.set(scores[i], names[i]);
        }

        scores.sort((a, b) => a - b);


        for (let i = 0; i < 10 && i < scores.length; i++) {
            let player = document.createElement('div');
            player.classList.add('player-intop-div');

            player.score = scores[i]; //в целях дебагинга добавил объектам эти проперти
            player.name = mapTop.get(scores[i]);

            let name = document.createElement('label');
            name.classList.add('player-intop-name');
            name.textContent = player.name;
            player.appendChild(name); //решил их и использовать

            let score = document.createElement('label');
            score.classList.add('player-intop-score');
            score.textContent = player.score;
            player.appendChild(score);

            topTable.appendChild(player);
        }
    } else {
        results = ' ';
        window.localStorage.setItem('results', results);
    };
}