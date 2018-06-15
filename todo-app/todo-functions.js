// Fetches existing todos from local storage
const getSavedTodos = function () {
    const tasksJSON = localStorage.getItem('todos')

    if(tasksJSON != null) {
        return JSON.parse(tasksJSON)
    } else{
        return []
    }
}

// Save todos to local storage
const saveTodos = function (list) {
    localStorage.setItem('todos', JSON.stringify(list))
}

// Render application todos based on filters
const renderTodos = function (list, filter) {
    document.body.querySelector('#container').innerHTML = ""

    list.forEach( function (item) {
        if (filter.showingAll && item.task.includes(filter.searchText)) {
            generateTodoDOM(item)
        } else if (!filter.showingAll) {
            if(!item.complete && item.task.includes(filter.searchText)) {
                generateTodoDOM(item)
            }
        }
    })
}

// Toggles todo to complete or not complete
const toggleTodo = function (item, itemCheckbox) {
    item.complete = itemCheckbox.checked
}

// Removes a todo
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (item) {
        return item.id === id
    })

    if (todoIndex > 0) {
        todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements from an individual todo
const generateTodoDOM = function (item) {

    // Generate elements
    const itemDiv = document.createElement('div')
    const itemCheckbox = document.createElement('input')
    const itemText = document.createElement('span')
    const itemDelete = document.createElement('button')

    // Set up itemCheckbox
    itemCheckbox.setAttribute('type','checkbox')
    itemCheckbox.checked = item.complete
    itemDiv.appendChild(itemCheckbox)
    itemCheckbox.addEventListener('change', function () {
        toggleTodo(item, itemCheckbox)
        saveTodos(todos)
        renderTodos(todos, filter)
        generateSummeryDOM(todos)
    })

    // Set up itemText
    itemText.textContent = item.task
    itemDiv.appendChild(itemText)

    // Set up itemDelete
    itemDelete.textContent = 'Delete'
    itemDiv.appendChild(itemDelete)
    itemDelete.addEventListener('click', function () {
        removeTodo(item.id)
        saveTodos(todos)
        renderTodos(todos, filter)
        generateSummeryDOM(todos)
    })

    document.body.querySelector('#container').appendChild(itemDiv)
}

//Get the DOM elements for a list summery
const generateSummeryDOM = function (list) {

    document.querySelector('#tally').innerHTML = ""

    // Filters by not complete
    const tallyNotDone = list.filter( function (item) {
        return !item.complete
    })

    // Prints tally text
    let tasksLeft = document.createElement('h2')
    tasksLeft.textContent = `You have ${tallyNotDone.length} todos left to do!`
    document.body.querySelector('#tally').appendChild(tasksLeft)
}