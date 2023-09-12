// image : string
export default function Image(image) {

    const Image = document.createElement('img')
    Image.classList.add('image')
    Image.setAttribute('src', `./src/assets/images/logo-${image}-pixel.png`)
    Image.setAttribute('alt', `Logo ${image} em pixel art`)

    return Image
}