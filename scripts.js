const result = document.querySelector(".result")
const win = document.querySelector(".win")
const lose = document.querySelector(".lose")

let winValue = 0
let loseValue = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate".toUpperCase()
        result.style.color = "blue"
    }

    else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {

        winValue++
        win.innerHTML = winValue

        result.innerHTML = "Você ganhou".toUpperCase()
        result.style.color = "green"
    }

    else {
        loseValue++
        lose.innerHTML = loseValue

        result.innerHTML = "Você perdeu".toUpperCase()
        result.style.color = "red"
    }
}