import WinnerModal from '../components/WinnerModal/index.js'

export default function finishGame() {

    setTimeout(showWinnerModal, 500)

}

function showWinnerModal() {

    const BoardGame = document.querySelector('.board-game')
    BoardGame.appendChild(WinnerModal())

}