export default function choosePlayer(activePlayer = sortPlayer()) {

    const ArrowDown = document.querySelector('.arrow-down')

    if (activePlayer === 'player1') {

        ArrowDown.classList.add('-player1')
        ArrowDown.classList.remove('-player2')

    } else if (activePlayer === 'player2') {

        ArrowDown.classList.add('-player2')
        ArrowDown.classList.remove('-player1')

    }
}

function sortPlayer() {

    return `player${Math.ceil(Math.random() * 2)}`

}