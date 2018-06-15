let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
}

let otherBook = {
    title : 'A Peoples History',
    author : 'Howard Zinn',
    pageCount : 723
}

let getSummery = function (book) {
    return {
        summery : `${book.title} by ${book.author}`,
        pageCountSummary : `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummery(myBook)
let otherBookSummary = getSummery(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge

let tempInFahrenheit = 30;

let tempConverter = function (fahrenheit) {
    return {
        fahrenheit : `Fahrenheit: ${fahrenheit}`,
        celsius : `Celsius: ${(fahrenheit - 32) * (5/9)}`,
        kelvin : `Kelvin: ${(fahrenheit + 459.67) * (5/9)}`
    }
}

console.log(tempConverter(tempInFahrenheit).fahrenheit)
console.log(tempConverter(tempInFahrenheit).celsius)
console.log(tempConverter(tempInFahrenheit).kelvin)