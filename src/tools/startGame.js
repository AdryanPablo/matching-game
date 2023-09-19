import hideWinnerModal from './modal/hideWinnerModal.js'
import hideCards from './card/hideCards.js'
import resetScores from './score/resetScores.js'
import choosePlayer from './player/choosePlayer.js'

export default function startGame() {

    hideWinnerModal()
    hideCards( document.querySelectorAll('.card-game.-discovered') )
    resetScores()
    choosePlayer()
    
    console.log('Embaralhar cartões')

}