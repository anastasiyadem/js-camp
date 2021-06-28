const todos = [ {
    text: 'Make morning gymnastics',
    completed: true
}, {
    text: 'Feed my cat',
    completed: true
}, {
    text: 'Order new credit card',
    completed: false
}, {
    text: 'Meet friends',
    completed: false
}, {
    text: 'Bake a bread',
    completed: false
} ]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters) {
    const filterTodos = todos.filter(function(todo) {
        // return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hasText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // const visible = !(filters.hideCompleted && todo.completed) 
        // c h r
        // t t -
        // t f +
        // f f +
        // f t +

        // const notVisible = filters.hideCompleted && todo.completed
        // const visible0 = !filters.hideCompleted || !todo.completed

        // if (filters.hideCompleted) {
        //     return todo.completed == true
        // } else {
        //     return true
        // }

        // const visible = !filters.hideCompleted || filters.hideCompleted || !todo.completed)

        // ((!filters.hideCompleted && todo.completed) || !filters.hideCompleted)

        // const visible = !filters.hideCompleted || (filters.hideCompleted && !todo.completed)
        const visible = true

        return hasText && visible
    })

    // filterTodos = filterTodos.filter(function (todo) {
    //     //return !filters.hideCompleted || (filters.hideCompleted && !todo.completed)
    //     if (filters.hideCompleted) {
    //         return !todo.completed
    //     } else {
    //         return true
    //     }
    // })

    const getThingsToDo = filterTodos.filter (function(todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''
    
    const howManyTodosLeft = document.createElement('h3')
    howManyTodosLeft.textContent = `You have ${getThingsToDo.length} todos left!`
    document.querySelector('#todos').appendChild(howManyTodosLeft)

    filterTodos.forEach(function(todo) {
        const todoEl = document.createElement('p')
        let sign = '- '
        if (todo.completed) {sign = '+ '}
        todoEl.textContent = sign + todo.text 
        document.querySelector('#todos').appendChild(todoEl)
    })

    // if (filters.hideCompleted) {
    //     todos.filter(!todo.completed)
    // } else { 

    //     }  
    // })
}

renderTodos(todos, filters)

document.querySelector('#new-todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.newTodo.value, 
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-done').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// todos.forEach(function(todo) {
//     const howManyTodosLeft = document.createElement('p')
//     howManyTodosLeft.textContent = todo.text
//     document.querySelector('body').appendChild(howManyTodosLeft)
// })

// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     console.log('I am adding a new todo')
// })

// document.querySelector('#new-todo').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })


