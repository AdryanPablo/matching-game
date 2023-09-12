import PlayerName from '../../components/PlayerName/index.js'
import ScorePanel from '../../components/ScorePanel/index.js'
import VsPlayer from '../../components/VsPlayer/index.js'

export default function ScoreBoard() {

    const ScoreBoard = document.createElement('header')
    ScoreBoard.classList.add('score-board')

    ScoreBoard.appendChild(PlayerName('Player1'))
    ScoreBoard.appendChild(ScorePanel())
    ScoreBoard.appendChild(VsPlayer())
    ScoreBoard.appendChild(ScorePanel())
    ScoreBoard.appendChild(PlayerName('Player2'))

    return ScoreBoard
}