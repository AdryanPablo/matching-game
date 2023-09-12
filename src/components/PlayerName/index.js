// name : string
export default function PlayerName(name) {

    const PlayerName = document.createElement('span')
    PlayerName.classList.add('player-name')
    PlayerName.textContent = name

    return PlayerName
}