import WinnerMessage from '../WinnerMessage/index.js'
import ArchievementIcon from '../ArchievementIcon/index.js'
import RestartButton from '../RestartButton/index.js'

export default function WinnerPanel() {

    const WinnerPanel = document.createElement('div')
    WinnerPanel.classList.add('winner-panel')

    WinnerPanel.appendChild(WinnerMessage('Player1', '-player'))
    WinnerPanel.appendChild(WinnerMessage('Winner!!!', '-winner'))
    WinnerPanel.appendChild(ArchievementIcon())
    WinnerPanel.appendChild(RestartButton())

    return WinnerPanel
}