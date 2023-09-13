// activeCards : Array
export default function hideCards(activeCards) {

    activeCards.forEach((card) => {

        console.log(card);
        
        setTimeout(() => {

            card.classList.remove('-active')

        }, 500)
    })
}