import changePlayer from '../../tools/changePlayer.js'

export default function ArrowDown() {

    const ArrowDown = document.createElement('div')
    ArrowDown.classList.add('arrow-down')
    ArrowDown.classList.add('-player1')

    ArrowDown.addEventListener('click', changePlayer)

    return ArrowDown
}