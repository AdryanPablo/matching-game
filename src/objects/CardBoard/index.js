import CardGame from '../../components/CardGame/index.js'

// amountCards : Number
export default function CardBoard(amountCards) {

    const CardBoard = document.createElement('section')
    CardBoard.classList.add('card-board')

    for (let i = 1; i <= amountCards; i++) {

        CardBoard.appendChild(CardGame('javascript'))

    }

    return CardBoard
}