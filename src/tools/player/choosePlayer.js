// activePlayer: string === ['player1' | 'player2'] | undefined
export default function choosePlayer(activePlayer = randomizePlayer()) {

    const ArrowDown = document.querySelector('.arrow-down')

    if (activePlayer === 'player1') {

        ArrowDown.classList.add('-player1')
        ArrowDown.classList.remove('-player2')

    } else if (activePlayer === 'player2') {

        ArrowDown.classList.add('-player2')
        ArrowDown.classList.remove('-player1')

    }
}

function randomizePlayer() {

    return `player${Math.ceil(Math.random() * 2)}`

}