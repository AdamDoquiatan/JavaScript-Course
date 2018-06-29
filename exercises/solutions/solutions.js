// 1.
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}
let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}`)
}
getSummary(myBook)

// 2.
let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}
let temps = convertFahrenheit(74)
console.log(temps)

// 3.
let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}
console.log(restaurant.checkAvailability(4))

// 4.
let name = ' Andrew Mead '
// Length property
console.log(name.length)
// Convert to upper case
console.log(name.toUpperCase())
// Convert to lower case
console.log(name.toLowerCase())
let password = 'abc123asdf098'
// Includes method
console.log(password.includes('password'))

// 5.
let num = 103.941
// Specify decimal points
console.log(num.toFixed(2))
// Round numbers
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// 6.
// Generate a random number
let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// 7.
const nums = [1]
nums.push(12)
nums.unshift(3)
console.log(nums) // Will print [3, 1, 12]

const nums = [10, 20, 30, 40]
nums.pop()
nums.pop()
nums.shift()
console.log(nums) // Will print [20]

// 8.
const nums = [10, 20, 30, 40]
// Use splice to replace the first item with 2000
nums.splice(0, 1, 2000)
nums.splice(2, 1)

console.log(nums) // Will print [2000, 20, 40]