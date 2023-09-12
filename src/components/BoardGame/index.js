import CardGame from "../CardGame/index.js"

export default function BoardGame() {

    const BoardGame = document.createElement('main')
    BoardGame.classList.add('board-game')

    BoardGame.appendChild(CardGame())

    return BoardGame
}