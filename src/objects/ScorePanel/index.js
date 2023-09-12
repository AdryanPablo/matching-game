import PlayerName from '../../components/PlayerName/index.js'
import VsPlayer from '../../components/VsPlayer/index.js'

export default function ScorePanel() {

    const ScorePanel = document.createElement('header')
    ScorePanel.classList.add('score-panel')

    ScorePanel.appendChild(PlayerName('Player1'))
    ScorePanel.appendChild(VsPlayer())
    ScorePanel.appendChild(PlayerName('Player2'))

    return ScorePanel
}