import ScoreBoard from '../../containers/ScoreBoard/index.js'
import CardBoard from '../../containers/CardBoard/index.js'

export default function BoardGame() {

    const BoardGame = document.createElement('main')
    BoardGame.classList.add('board-game')

    BoardGame.appendChild(ScoreBoard())
    BoardGame.appendChild(CardBoard())

    return BoardGame
}