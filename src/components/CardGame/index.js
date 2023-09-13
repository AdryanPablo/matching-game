import FaceCard from '../FaceCard/index.js'

import turnCard from '../../tools/turnCard.js'

// image : string
export default function CardGame(image) {

    const CardGame = document.createElement('article')
    CardGame.classList.add('card-game')

    CardGame.appendChild(FaceCard('front'))
    CardGame.appendChild(FaceCard('back', image))

    CardGame.addEventListener('click', (event) => { turnCard(event.target) })

    return CardGame
}