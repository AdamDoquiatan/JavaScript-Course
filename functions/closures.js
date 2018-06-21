const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

// Tipper

const createTipper = (tip) => {
    return (bill) => {
        return bill * tip
    }
} 

const tipper1 = createTipper(0.15)
const tipper2 = createTipper(0.10)
const tipper3 = createTipper(0.35)

console.log(`Tip this much: ${tipper1(10)}`)
console.log(`Tip this much: ${tipper2(55)}`)
console.log(`Tip this much: ${tipper3(15)}`)
