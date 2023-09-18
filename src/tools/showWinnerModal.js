import WinnerModal from '../components/WinnerModal/index.js'

export default function showWinnerModal(winner = 'Player1') {

    const BoardGame = document.querySelector('.board-game')
    BoardGame.appendChild(WinnerModal(winner))

}