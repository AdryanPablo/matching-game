import hideWinnerModal from './modal/hideWinnerModal.js'
import hideCards from './card/hideCards.js'
import resetScores from './score/resetScores.js'
import choosePlayer from './player/choosePlayer.js'
import insertCards from './card/insertCards.js'

// player: string === ['player1' | 'player2'] | undefined
export default function startGame(player) {

    hideWinnerModal()
    hideCards( document.querySelectorAll('.card-game.-discovered') )
    resetScores()
    choosePlayer(player)
    insertCards(6)

}