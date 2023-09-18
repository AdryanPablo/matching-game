import WinnerPanel from '../../components/WinnerPanel/index.js'

export default function WinnerModal() {

    const WinnerModal = document.createElement('div')
    WinnerModal.classList.add('winner-modal')

    WinnerModal.appendChild(WinnerPanel())

    return WinnerModal
}