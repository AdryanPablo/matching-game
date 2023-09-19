import showWinnerModal from './modal/showWinnerModal.js'
import verifyWinner from './player/verifyWinner.js'

export default function finishGame() {

    setTimeout(() => { showWinnerModal(verifyWinner()) }, 500)

}