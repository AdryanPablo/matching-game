import CardGame from '../../components/CardGame/index.js'

import cardIcons from './cardIcons.js'
import shuffleCards from './shuffleCards.js'

// amountCards: number
export default function insertCards(amountCards) {

    const CardBoard = document.querySelector('.card-board')
    
    removeAllCards()

    shuffleCards(cardIcons)

    for (let i = 0; i < amountCards; i++) {

        CardBoard.appendChild(CardGame(cardIcons[i]))

    }
}

function removeAllCards() {

    const CardBoard = document.querySelector('.card-board')
    const Cards = document.querySelectorAll('.card-game')

    Cards.forEach((Card) => { CardBoard.removeChild(Card) })

}