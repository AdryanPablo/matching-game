import countScore from './countScore.js'

export default function addPoint(player = 'player1') {

    const scorePanel = document.querySelectorAll(`.-${player} .score`)
    const playerScore = countScore(player)

    scorePanel[playerScore].classList.add('-point')

}