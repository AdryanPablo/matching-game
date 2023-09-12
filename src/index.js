import CardBoard from "./components/CardBoard/index.js"

const $root = document.querySelector('#root')

window.addEventListener('load', () => {
    
    $root.appendChild(CardBoard())

})