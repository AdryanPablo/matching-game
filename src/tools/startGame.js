import hideWinnerModal from './hideWinnerModal.js'
import hideCards from './hideCards.js'
import resetScores from './resetScores.js'

export default function startGame() {

    hideWinnerModal()
    hideCards( document.querySelectorAll('.card-game.-discovered') )
    resetScores()
    
    console.log('Embaralhar cartões')
    console.log('Vez do player1')

}