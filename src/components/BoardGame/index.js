import CardBoard from '../../objects/CardBoard/index.js'

export default function BoardGame() {

    const BoardGame = document.createElement('main')
    BoardGame.classList.add('board-game')

    BoardGame.appendChild(CardBoard(6))

    return BoardGame
}