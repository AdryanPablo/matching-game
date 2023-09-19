import findImage from './findImage.js'
import discoverCards from './discoverCards.js'
import addPoint from '../score/addPoint.js'
import hideCards from './hideCards.js'
import changePlayer from '../player/changePlayer.js'
import verifyDiscoveredCards from './verifyDiscoveredCards.js'

export default function verifyActiveCards() {

    const activeCards = document.querySelectorAll('.card-game.-active')
    const activePlayer = document.querySelector('.arrow-down').classList.contains('-player1') ? 'player1' : 'player2'

    if (activeCards.length == 2) {

        if (findImage(activeCards[0]) == findImage(activeCards[1])) {   // Player find

            setTimeout(() => {

                discoverCards(activeCards)
                addPoint(activePlayer)
                verifyDiscoveredCards()

            }, 500)

        } else {    // Player didn't find

            setTimeout(() => { hideCards(activeCards) ; changePlayer() }, 500)

        }    
    }
}