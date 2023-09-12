export default function ArrowDown() {

    const ArrowDown = document.createElement('div')
    ArrowDown.classList.add('arrow-down')
    ArrowDown.classList.add('-player1')

    ArrowDown.addEventListener('click', changePlayer)

    return ArrowDown
}

function changePlayer() {

    const ArrowDown = document.querySelector('.arrow-down')

    ArrowDown.classList.toggle('-player1')
    ArrowDown.classList.toggle('-player2')

}