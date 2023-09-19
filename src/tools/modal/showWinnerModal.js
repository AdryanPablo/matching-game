import WinnerModal from '../../components/WinnerModal/index.js'

// winner: string # Player name
export default function showWinnerModal(winner) {

    const BoardGame = document.querySelector('.board-game')
    BoardGame.appendChild(WinnerModal(winner))

}

