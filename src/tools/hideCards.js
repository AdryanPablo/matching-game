// activeCards : Array
export default function hideCards(activeCards) {

    activeCards.forEach((card) => {

        setTimeout(() => {

            card.classList.remove('-active')

        }, 500)
    })
}