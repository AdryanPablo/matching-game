import PlayerName from '../../components/PlayerName/index.js'
import ScorePanel from '../../components/ScorePanel/index.js'

export default function PlayerWrapper(player = 1) {

    const PlayerWrapper = document.createElement('div')
    PlayerWrapper.classList.add('player-wrapper')

    if (player === 1) {

        PlayerWrapper.classList.add('-player1')

        PlayerWrapper.appendChild(PlayerName('Player1'))
        PlayerWrapper.appendChild(ScorePanel())

    } else {

        PlayerWrapper.classList.add('-player2')

        PlayerWrapper.appendChild(ScorePanel())
        PlayerWrapper.appendChild(PlayerName('Player2'))

    }

    return PlayerWrapper
}