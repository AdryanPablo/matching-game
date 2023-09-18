export default function turnCard(target) {

    const card = target.closest('.card-game')

    // Turn card only if it's not discovered
    if (!card.classList.contains('-discovered')) { card.classList.toggle('-active') }

}