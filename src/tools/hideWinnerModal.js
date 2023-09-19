export default function hideWinnerModal() {

    const BoardGame = document.querySelector('.board-game')
    const WinnerModal = document.querySelector('.winner-modal')

    BoardGame.removeChild(WinnerModal)

}