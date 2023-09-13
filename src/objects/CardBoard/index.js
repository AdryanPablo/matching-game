import CardGame from '../../components/CardGame/index.js'

import cardIcons from './cardIcons.js'
import shuffleCards from '../../tools/shuffleCards.js'

// amountCards : Number
export default function CardBoard(amountCards) {

    const CardBoard = document.createElement('section')
    CardBoard.classList.add('card-board')

    shuffleCards(cardIcons)

    for (let i = 0; i < amountCards; i++) {

        CardBoard.appendChild(CardGame(cardIcons[i]))

    }

    return CardBoard
}