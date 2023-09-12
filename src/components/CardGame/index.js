import Image from '../../elements/Image/index.js'

// image : string
export default function CardGame(image) {

    const CardGame = document.createElement('article')
    CardGame.classList.add('card-game')

    CardGame.appendChild(Image(image))

    return CardGame
}