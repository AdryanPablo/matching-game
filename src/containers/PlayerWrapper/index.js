import PlayerName from '../../components/PlayerName/index.js'
import ScorePanel from '../../components/ScorePanel/index.js'

// player: string === ['player1' | 'player2']
export default function PlayerWrapper(player) {

    const PlayerWrapper = document.createElement('div')
    PlayerWrapper.classList.add('player-wrapper')

    if (player === 'player1') {

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