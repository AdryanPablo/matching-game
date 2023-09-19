import hideWinnerModal from './hideWinnerModal.js'
import hideCards from './hideCards.js'
import resetScores from './resetScores.js'
import choosePlayer from './choosePlayer.js'

export default function startGame() {

    hideWinnerModal()
    hideCards( document.querySelectorAll('.card-game.-discovered') )
    resetScores()
    choosePlayer()
    
    console.log('Embaralhar cartões')
    console.log('Vez do player1')

}