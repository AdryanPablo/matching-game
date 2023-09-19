import Image from '../../elements/Image/index.js'

// face: string === ['-front' | '-back']
// image: string # Technology logo
export default function FaceCard(face, image) {

    const FaceCard = document.createElement('aside')
    FaceCard.classList.add('face-card')
    FaceCard.classList.add(`-${face}`)

    if (face == 'front') { FaceCard.appendChild(Image('alura')) }
    else { FaceCard.appendChild(Image(image)) }

    return FaceCard
}