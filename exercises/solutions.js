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

// 9.
const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work',
    'Exercise']
// This will print a numbered list for each todo item
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

// 10.
const places = ['Philadelphia', 'Texas', 'Vermont']
const index = places.indexOf('Vermont')
console.log(index) // Will print 2

// 11a.
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const index = notes.findIndex(function (note, index) {
    return note.title === 'Habbits to work on'
})
console.log(index) // Will print 1

// 11b.
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
const note = findNote(notes, 'my next trip')
console.log(note) // Will print the first object from our array above

// 12.
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Do work',
    completed: false
}]
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}
// Will print an array of all todos that still need to be completed
console.log(getThingsToDo(todos))

// 13.
const todos = [{
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]
const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)

// 14.
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)

// 15.
document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

// 16.
document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

// 17.
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.text.value = ''
})

// 18.
document.querySelector('#delivery').addEventListener('change', function (e) {
    console.log(e.target.checked)
})

// 19.
localStorage.setItem('username', 'Andrew')
const name = localStorage.get('username')
console.log(name)
localStorage.removeItem('username')
localStorage.clear()

// 20.
// < script src="http://wzrd.in/standalone/uuid%2Fv4@latest" ></script>
//<script src="notes-functions.js"></script>
//<script src="notes-app.js"></script>
const id = uuidv4()
console.log(id) // Will print the new random id

// 21.
const id = location.hash.substring(1)

// 22.
window.addEventListener('storage', function (e) {
    // Will fire for localStorage changes that come from a different page
})

// 23.
const type = typeof 12
console.log(type) // Will print "number"

// 24.
// Strict Mode prevents leaked variables. Type 'use strict' at top of javascript file.
//ie, this code leaks a variable (becuase data isn't declared)
const processData = () => {
    data = '1230987234'
}
processData()
console.log(data) // Will print '1230987234'

// 25.
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    return bio
}

const me = new Person('Andrew', 'Mead', 27)
console.log(me)

// 26.
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
}
const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())

// 27.
class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

// 28.
const human = {
    firstName: 'Alexis',
    lastName: 'Turner',
    get name() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(human.name) // Prints "Alexis Turner"

// 29.
const human = {
    firstName: 'Alexis',
    lastName: 'Turner',
    get name() {
        return `${this.firstName} ${this.lastName}`
    },
    set name(name) {
        const names = name.trim().split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}
human.name = ' Andrew Mead '
console.log(human.firstName) // Prints "Andrew"
console.log(human.lastName) // Prints "Mead"

// 30
// Get data using Promises
const fetch = require('node-fetch');

const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// Can be called from another file.
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// 31.
// utilities.js
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const square = (x) => x * x
export { add, subtract, square as default }

// 32.
// index.js
import otherSquare, { add } from './utilities'
console.log(add(32, 1)) // Will print: 33
console.log(otherSquare(10)) // Will print: 100

// 33.
const calculateAverage = (...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    return sum / numbers.length
}
console.log(calculateAverage(0, 100, 88, 64)) // Will print: 63

// 34.
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

// 35.
printTeam(...team.players)

// 36.
let clone = {
    ...house
}

// 37.
const { text: todoText, completed, details = 'No details provided', ...others
} = todo
console.log(todoText) // Will print: "Pay the bills"
console.log(completed) // Will print: false
console.log(details) // Will print: "No details provided"
console.log(others) // Will print: { id: "asdfpoijwermasdf" }

// 38.
const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

// 39.
// ?????????????????????????????????