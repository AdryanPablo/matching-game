import countScore from './countScore.js'

// player: string === ['player1' | 'player2']
export default function addPoint(player) {

    const scorePanel = document.querySelectorAll(`.-${player} .score`)
    const playerScore = countScore(player)

    scorePanel[playerScore].classList.add('-point')

}