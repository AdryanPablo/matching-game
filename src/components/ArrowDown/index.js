import Image from '../../elements/Image/index.js'

import changePlayer from '../../tools/player/changePlayer.js'

export default function ArrowDown() {

    const ArrowDown = Image('arrow-down', 'icon')
    ArrowDown.classList.add('arrow-down')

    return ArrowDown
}