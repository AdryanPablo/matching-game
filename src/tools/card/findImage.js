// card: HTMLElement
export default function findImage(card) {

    return card.lastChild.firstChild.getAttribute('src')

}