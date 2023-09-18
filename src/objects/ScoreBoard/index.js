import ArrowDown from '../../components/ArrowDown/index.js'
import PlayerWrapper from '../PlayerWrapper/index.js'
import VsPlayer from '../../components/VsPlayer/index.js'

export default function ScoreBoard() {

    const ScoreBoard = document.createElement('header')
    ScoreBoard.classList.add('score-board')

    ScoreBoard.appendChild(ArrowDown())

    ScoreBoard.appendChild(PlayerWrapper(1)) 
    ScoreBoard.appendChild(VsPlayer())
    ScoreBoard.appendChild(PlayerWrapper(2))
    

    return ScoreBoard
}