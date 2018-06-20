const game1 = new Hangman ('Car Parts', 2)
game1.puzzle
game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.puzzle
    game1.statusMessage
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry("CA", (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country)
    }
})