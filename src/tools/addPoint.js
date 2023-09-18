export default function addPoint() {

    const scorePanel = document.querySelectorAll('.score-panel > .score')

    let playerScore = 0
    scorePanel.forEach((score) => {

        if (score.classList.contains('-active')) { playerScore++ }

    })

    scorePanel[playerScore].classList.add('-active')

}