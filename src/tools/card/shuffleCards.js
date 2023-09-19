// cards: Array[HTMLElement]
export default function shuffleCards(cards) {

    let currentIndex = cards.length - 1
    while (currentIndex > 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex)
        let choosenCards = [cards[currentIndex], cards[randomIndex]]

        cards[randomIndex] = choosenCards[0]
        cards[currentIndex] = choosenCards[1]

        currentIndex--    
    }
}