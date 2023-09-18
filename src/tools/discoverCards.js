export default function discoverCards(activeCards) {

    console.log('descobriu')

    activeCards.forEach((card) => {

        card.classList.remove('-active')
        card.classList.add('-discovered')

    })
}