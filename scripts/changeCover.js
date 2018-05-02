let gameField = document.querySelector(".game-field-section");
export default function changeCover(cover) {

    for (let i = 0; i < gameField.children.length; i++) {
        gameField.children[i].classList.remove(currentCover);
        gameField.children[i].classList.add(cover);
    }

   currentCover = cover;
}