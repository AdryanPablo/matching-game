// activeCards: Array[HTMLElement]
export default function hideCards(cards) {

    cards.forEach((card) => {

        card.classList.remove('-active')
        card.classList.remove('-discovered')

    })
}