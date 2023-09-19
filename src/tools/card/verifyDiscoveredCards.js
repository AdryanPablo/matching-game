import finishGame from '../finishGame.js'

export default function verifyDiscoveredCards() {

    const discoveredCards = document.querySelectorAll('.card-game.-discovered')

    if (discoveredCards.length == 6) { finishGame() }

}