import hideWinnerModal from './hideWinnerModal.js'
import hideCards from './hideCards.js'

export default function startGame() {

    hideWinnerModal()
    hideCards( document.querySelectorAll('.card-game.-discovered') )
    
    console.log('Embaralhar cartões')
    console.log('Zerar pontos')
    console.log('Vez do player1')

}