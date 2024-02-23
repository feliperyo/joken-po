const GAME_OPTIONS = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
}


const result = document.querySelector('.result')
const cola = document.querySelector('.var')
const win = document.querySelector('.win')
const lose = document.querySelector('.lose')

let winValue = 0
let loseValue = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]

}

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} Máquina: ${machine}`)

    if (human === machine) {
        result.innerHTML = "Deu empate".toUpperCase()
        result.style.color = "blue"

        cola.innerHTML = `(Você: ${human}  IA: ${machine})`
    }
    else if (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA ||
        human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA ||
        human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL) {

        winValue++
        win.innerHTML = winValue

        result.innerHTML = "Você ganhou".toUpperCase()
        result.style.color = "green"

        cola.innerHTML = `(Você: ${human}  IA: ${machine})`
    }
    else {
        loseValue++
        lose.innerHTML = loseValue

        result.innerHTML = "Você perdeu".toUpperCase()
        result.style.color = "red"

        cola.innerHTML = `(Você: ${human}  IA: ${machine})`
    }
}