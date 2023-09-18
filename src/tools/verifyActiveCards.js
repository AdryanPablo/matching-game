import findImage from './findImage.js'
import discoverCards from './discoverCards.js'
import addPoint from './addPoint.js'
import hideCards from './hideCards.js'
import changePlayer from './changePlayer.js'

export default function verifyActiveCards() {

    const activeCards = document.querySelectorAll('.card-game.-active')
    const activePlayer = document.querySelector('.arrow-down').classList.contains('-player1') ? 'player1' : 'player2'

    if (activeCards.length == 2) {

        if (findImage(activeCards[0]) == findImage(activeCards[1])) {   // Player find

            discoverCards(activeCards)
            addPoint(activePlayer)

        } else {    // Player didn't find

            hideCards(activeCards)
            changePlayer()

        }    
    }
}

