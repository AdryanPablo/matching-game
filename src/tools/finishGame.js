import showWinnerModal from './showWinnerModal.js'
import verifyWinner from './verifyWinner.js'

export default function finishGame() {

    setTimeout(() => { showWinnerModal(verifyWinner()) }, 500)

}