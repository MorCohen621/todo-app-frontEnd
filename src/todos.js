import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []
// loadTodos
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}
// Arguments: none
// Return value: none

// saveTodos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}
// Arguments: none
// Return value: none

// getTodos
const getTodos = () => todos
// Arguments: none
// Return value: todos array

// createTodo

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()

}

// Arguments: todo text
// Return value: none

// removeTodo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports
todos = loadTodos()
export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }