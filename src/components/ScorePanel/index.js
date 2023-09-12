import Score from '../../elements/Score/index.js'

export default function ScorePanel() {

    const ScorePanel = document.createElement('div')
    ScorePanel.classList.add('score-panel')

    ScorePanel.appendChild(Score())
    ScorePanel.appendChild(Score())
    ScorePanel.appendChild(Score())

    return ScorePanel
}