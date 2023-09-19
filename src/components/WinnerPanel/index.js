import WinnerMessage from '../WinnerMessage/index.js'
import ArchievementIcon from '../ArchievementIcon/index.js'
import RestartButton from '../RestartButton/index.js'

// winner: string # Player name
export default function WinnerPanel(winner) {

    const WinnerPanel = document.createElement('div')
    WinnerPanel.classList.add('winner-panel')

    WinnerPanel.appendChild(WinnerMessage(winner, '-player'))
    WinnerPanel.appendChild(WinnerMessage('Winner!!!', '-winner'))
    WinnerPanel.appendChild(ArchievementIcon())
    WinnerPanel.appendChild(RestartButton())

    return WinnerPanel
}