import hideCards from './hideCards.js'

export default function verifyActiveCards() {

    const activeCards = document.querySelectorAll('.card-game.-active')

    if (activeCards.length == 2) { hideCards(activeCards) }

}