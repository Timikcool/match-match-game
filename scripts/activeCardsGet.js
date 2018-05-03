let activeCardsStr = window.localStorage.getItem('activeCards');
if(!activeCardsStr){
	activeCardsStr = '';
}
let activeCardsArr = activeCardsStr.match(/\w+/g);

let cards = [];

function checkActiveCards(){
	if(activeCardsArr[0] === activeCardsArr[1]){

		return true
	}else return false;
}
function setActive(card){
	cards.push(card);
	if(activeCardsArr < 2 && cards[0] != cards[1]){
		window.localStorage.setItem('activeCards',`${activeCardsStr},${card.country}`);
	}else return false;
}
export {checkActiveCards, setActive};