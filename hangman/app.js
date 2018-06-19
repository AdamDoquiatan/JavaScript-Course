const game1 = new Hangman ('Car Parts', 2)
game1.puzzle
game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.puzzle
    game1.statusMessage
})