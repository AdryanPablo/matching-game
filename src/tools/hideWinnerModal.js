export default function hideWinnerModal() {

    const BoardGame = document.querySelector('.board-game')
    const WinnerModal = document.querySelector('.winner-modal')

    console.log(BoardGame)
    console.log(WinnerModal)

    BoardGame.removeChild(WinnerModal)

}