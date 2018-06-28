import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
let loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    todosJSON ? todos = JSON.parse(todosJSON) : todos = []
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => {
    return todos
}

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
    if (text != '') {
        todos.push({
            id: uuidv4(),
            title: text,
            completed: false
        })
    saveTodos()
    } else {
        console.log('Please write something first.')
    }
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id)
    
    if (index > -1) {
        todos.splice(index, 1)
        saveTodos()
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    const target = todos.find((item) => {
        return item.id === id
    })
    console.log(target)
    target.completed ? target.completed = false: target.completed = true
    saveTodos()
    console.log(target)
}



// Make sure to call loadTodos and setup the exports
export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }