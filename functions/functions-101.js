let greetUser = function () {
    console.log('Welcome User!')
}

greetUser();

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value + " " + otherValue)

let farToCel = function (far) {
    cel = (far - 32) * 5 / 9
    return cel
}

console.log(farToCel(32))
console.log(farToCel(68))