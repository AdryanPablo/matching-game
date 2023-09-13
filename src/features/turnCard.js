export default function turnCard(target) {

    const card = target.closest('.card-game')
    card.classList.toggle('-active')
    
}