// content: string
// variationClass: string
export default function WinnerMessage(content, variationClass) {

    const WinnerMessage = document.createElement('p')
    WinnerMessage.classList.add('winner-message')
    WinnerMessage.classList.add(variationClass)

    WinnerMessage.textContent = content

    return WinnerMessage
}