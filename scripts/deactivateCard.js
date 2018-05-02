export default function deactivateCard(card) {
    card.classList.add('deactivating');

    setTimeout(() => {
        card.classList.remove('active');
        card.classList.add('closed');
        card.classList.add(currentCover);
    }, 250);

    setTimeout(() => {
        card.classList.remove('deactivating');
    }, 500);



    console.log(`#card ${card.classList[0]} deactivated!`);
}