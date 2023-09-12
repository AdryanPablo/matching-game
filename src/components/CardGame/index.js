import Image from '../../elements/Image/index.js'

export default function CardGame(image, alt) {

    const CardGame = document.createElement('article')
    CardGame.classList.add('card-game')

    CardGame.appendChild(Image('alura'))

    return CardGame
}