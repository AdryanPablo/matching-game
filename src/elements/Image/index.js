// image: string # Technology logo
// art: string === ['logo' | 'icon'] # Kind of image
export default function Image(image, art = 'logo') {

    const Image = document.createElement('img')
    Image.classList.add('image')
    Image.setAttribute('src', `./src/assets/images/${art}-${image}-pixel.png`)
    Image.setAttribute('alt', `Logo ${image} em pixel art`)

    return Image
}