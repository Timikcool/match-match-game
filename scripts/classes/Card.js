export default class Card {
	constructor(country, gameField) {
		this.elem = document.createElement('div');
		this.elem.classList.add('card');

		this.country = country;

		this.elem.classList.add('closed');
		this.elem.currentCover = 'default';

		this.gameField = gameField;

		this.elem.addEventListener('click', () => {
			if (this.elem.classList.contains('closed') && !this.elem.classList.contains('delete')) {
				this.activate();
			} else if (this.elem.classList.contains('active') && !this.elem.classList.contains('delete')) {
				this.deactivate();
				if (this == this.gameField.activeCards[0]) { //проверка на повторное нажатие на ту же карту
					this.gameField.activeCards.shift();
				}
			}
		});

	}
	activate() {
		console.log(`#card ${this.country} is active now!`);

		this.elem.classList.add('active');

		this.elem.classList.remove(this.elem.currentCover);
		this.elem.classList.add(this.country);
		
		this.elem.classList.remove('closed');


		setTimeout(() => {

			this.gameField.activeCards.push(this);

			if (this.gameField.activeCards.length == 2 && this.gameField.activeCards[0] != this.gameField.activeCards[1]) {
				if (this.gameField.activeCards[0].country == this.gameField.activeCards[1].country) { //проверка одинаковы ли страны

					this.gameField.activeCards.forEach(item => item.elem.classList.add('delete'));
					this.gameField.numberOfCards -= 2;

					//activeCards.forEach((item) => this.gameField.removeChild(item)); 
					this.gameField.activeCards = [];


					document.querySelector('.score-counter').textContent++;
					console.log('#match!');
				} else {
					this.gameField.activeCards.forEach(item => item.deactivate());
					this.gameField.activeCards = [];

					console.log(`#mismatch!`)
				}
			}
		}, 1000);
	}

	deactivate() {
		this.elem.classList.add('deactivating');


		this.elem.classList.remove('active');
		
		this.elem.classList.remove(this.country);
		this.elem.classList.add(this.elem.currentCover);

		this.elem.classList.add('closed');

		this.elem.classList.remove('deactivating');
		console.log(`#card ${this.elem.classList[0]} deactivated!`);
	}
}