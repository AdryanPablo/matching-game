export default function addPoint(player = 'player1') {

    const scorePanel = document.querySelectorAll(`.-${player} .score`)

    console.log(scorePanel)

    let playerScore = 0
    scorePanel.forEach((score) => {

        if (score.classList.contains('-active')) { playerScore++ }

    })

    scorePanel[playerScore].classList.add('-active')

}