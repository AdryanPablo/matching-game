import WinnerPanel from '../../components/WinnerPanel/index.js'

// winner: string # Player name
export default function WinnerModal(winner) {

    const WinnerModal = document.createElement('div')
    WinnerModal.classList.add('winner-modal')

    WinnerModal.appendChild(WinnerPanel(winner))

    return WinnerModal
}