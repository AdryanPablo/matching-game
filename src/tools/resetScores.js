export default function resetScores() {

    const scorePanel = document.querySelectorAll('.score')

    scorePanel.forEach((score) => { score.classList.remove('-point') })
    
}