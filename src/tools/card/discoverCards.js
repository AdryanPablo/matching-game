export default function discoverCards(activeCards) {

    activeCards.forEach((card) => {

        card.classList.remove('-active')
        card.classList.add('-discovered')

    })
}