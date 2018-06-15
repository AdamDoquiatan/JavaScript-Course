let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

let getScoreText = function (name = 'Player', score = 0) {
    return `Name: ${name}\nScore: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let getTip = function (total, tipPercent = 0.2) {
    return total * tipPercent
}

let total = 40
let tipPercent = 0.25
let tip = getTip(total, tipPercent)

console.log(`A ${tipPercent * 100}% tip on $${total} would be $${tip}!`)


let name = 'Adam'
let age = '29'
console.log(`Hey, my name is ${name}, aged ${age}!`)