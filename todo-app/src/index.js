// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getFilters, setFilters } from './filters.js'
import { loadTodos, getTodos, createTodo, removeTodo, toggleTodo } from './todos.js'

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage
////////////////////////////////////////////////////////////////////////////

// console.log(getFilters())
// console.log(setFilters('Filters ahoy'))
// console.log(getFilters())

loadTodos()
// createTodo('R')
// createTodo('3')
// createTodo('6')
// removeTodo('7bdde5a3-2fd4-4673-ab21-5bf5ef4ae691')
toggleTodo('a14a433f-5d72-4a4f-bdf0-4951d4deb6ae')
console.log(getTodos())







