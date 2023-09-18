import findImage from './findImage.js'
import discoverCards from './discoverCards.js'
import addPoint from './addPoint.js'
import hideCards from './hideCards.js'

export default function verifyActiveCards() {

    const activeCards = document.querySelectorAll('.card-game.-active')

    if (activeCards.length == 2) {

        if (findImage(activeCards[0]) == findImage(activeCards[1])) {   // Player find

            discoverCards(activeCards)
            addPoint()

        } else {    // Player didn't find

            hideCards(activeCards)

        }    
    }
}

