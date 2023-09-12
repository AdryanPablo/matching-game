import PlayerName from '../../components/PlayerName/index.js'
import VsPlayer from '../../components/VsPlayer/index.js'

export default function ScoreBoard() {

    const ScoreBoard = document.createElement('header')
    ScoreBoard.classList.add('score-panel')

    ScoreBoard.appendChild(PlayerName('Player1'))
    ScoreBoard.appendChild(VsPlayer())
    ScoreBoard.appendChild(PlayerName('Player2'))

    return ScoreBoard
}