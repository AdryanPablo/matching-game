export default function RestartButton() {

    const RestartButton = document.createElement('button')
    RestartButton.classList.add('restart-button')
    RestartButton.textContent = 'Restart'

    return RestartButton
}