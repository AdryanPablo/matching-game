import BoardGame from './components/BoardGame/index.js'

const $root = document.querySelector('#root')

window.addEventListener('load', () => {
    
    $root.appendChild(BoardGame())

})