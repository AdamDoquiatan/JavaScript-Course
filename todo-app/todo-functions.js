// Fetches existing todos from local storage
const getSavedTodos = () => {
    const tasksJSON = localStorage.getItem('todos')

    try {
        return tasksJSON ? JSON.parse(tasksJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to local storage
const saveTodos = (list) => {
    localStorage.setItem('todos', JSON.stringify(list))
}

// Render application todos based on filters
const renderTodos = (list, filter) => {
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
const toggleTodo = (item, itemCheckbox) => {
    item.complete = itemCheckbox.checked
}

// Removes a todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((item) => item.id === id)

    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements from an individual todo
const generateTodoDOM = (item) => {

    // Generate elements
    const itemDiv = document.createElement('div')
    const itemCheckbox = document.createElement('input')
    const itemText = document.createElement('span')
    const itemDelete = document.createElement('button')

    // Set up itemCheckbox
    itemCheckbox.setAttribute('type','checkbox')
    itemCheckbox.checked = item.complete
    itemDiv.appendChild(itemCheckbox)
    itemCheckbox.addEventListener('change', () => {
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
    itemDelete.addEventListener('click', () => {
        removeTodo(item.id)
        saveTodos(todos)
        renderTodos(todos, filter)
        generateSummeryDOM(todos)
    })

    document.body.querySelector('#container').appendChild(itemDiv)
}

//Get the DOM elements for a list summery
const generateSummeryDOM = (list) => {

    document.querySelector('#tally').innerHTML = ""

    // Filters by not complete
    const tallyNotDone = list.filter((item) => !item.complete)

    // Prints tally text
    let tasksLeft = document.createElement('h2')
    tasksLeft.textContent = `You have ${tallyNotDone.length} todos left to do!`
    document.body.querySelector('#tally').appendChild(tasksLeft)
}