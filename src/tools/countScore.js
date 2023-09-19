export default function countScore(player) {

    const scorePanel = document.querySelectorAll(`.-${player} .score`)

    let playerScore = 0
    scorePanel.forEach((score) => {

        if (score.classList.contains('-point')) { playerScore++ }

    })

    return playerScore
}