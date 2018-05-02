export default function mismatch() {
    activeCards.forEach(item => deactivateCard(item));
    activeCards = [];

    console.log(`#mismatch!`)
}