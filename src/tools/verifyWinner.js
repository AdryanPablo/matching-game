import countScore from './countScore.js'

export default function verifyWinner() {

    if (countScore('player1') > countScore('player2')) { return 'Player1' }
    else { return 'Player2' }

}