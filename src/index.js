import BoardGame from './components/BoardGame/index.js'

import startGame from './tools/startGame.js'

const $root = document.querySelector('#root')

window.addEventListener('load', () => {
    
    $root.appendChild(BoardGame())
    
    startGame()

})