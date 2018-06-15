let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

let person = {
    name : 'Adam',
    age : '29',
    location : 'Vancouver'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)

person.age++

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)