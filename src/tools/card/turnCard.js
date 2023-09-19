// target === [event.target]
export default function turnCard(target) {

    const card = target.closest('.card-game')

    // Turn card only if it's not active or discovered
    if (!card.classList.contains('-active') && !card.classList.contains('-discovered')) {
        
        card.classList.toggle('-active')
    
    }
}