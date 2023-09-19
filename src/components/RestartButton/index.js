import startGame from '../../tools/startGame.js'

export default function RestartButton() {

    const RestartButton = document.createElement('button')
    RestartButton.classList.add('restart-button')
    RestartButton.textContent = 'Restart'

    RestartButton.addEventListener('click', () => {

        const winner = document.querySelector('.winner-message.-player').textContent.toLowerCase()
        
        startGame(winner)
    
    })

    return RestartButton
}