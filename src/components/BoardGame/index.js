import ScoreBoard from '../../containers/ScoreBoard/index.js'
import CardBoard from '../../containers/CardBoard/index.js'
import WinnerModal from '../../components/WinnerModal/index.js'

export default function BoardGame() {

    const BoardGame = document.createElement('main')
    BoardGame.classList.add('board-game')

    BoardGame.appendChild(ScoreBoard())
    BoardGame.appendChild(CardBoard(6))
    BoardGame.appendChild(WinnerModal())

    return BoardGame
}