const todos = [{
    task : 'task 1',
    complete : true
}, {
    task : 'task 2',
    complete : false
}, {
    task : 'task 3',
    complete : true
}, {
    task : 'task 4',
    complete : false
}, {
    task : 'task 5',
    complete : true
},]

const deleteToDo = function (list, todo) {
    const index = list.findIndex(function (object) {
        return object.task.toLowerCase() === todo.toLowerCase()
    })
    console.log(index)

    if (index >= 0) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (list) {
    return list.filter(function(list) {
        return !list.complete;
    })
}

const sortToDos = function (list) {
    list.sort(function (a, b) {
        if (a.complete && !b.complete) {
            return -1
        } else if (b.complete && !a.complete) {
            return 1
        } else {
            return 0
        }
    })
} 

sortToDos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteToDo(todos, 'task 4')
// console.log(todos)
