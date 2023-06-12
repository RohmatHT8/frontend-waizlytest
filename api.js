const baseUrl = 'http://localhost:3001';

export const getAllTodos = async () => {
    const res =  await fetch(`${baseUrl}/tasks`, {
        cache: 'no-store',
    })
    const todos = await res.json()
    return todos
}

export const getTodo = async (id) => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
        cache: 'no-store'
    })
    const todo = await res.json()
    return todo
}

export const addTodo = async (todo) => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    const newTodo = await res.json()
    return newTodo
}

export const editTodo = async (todo, id) => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(todo)
    })

    const newTodo = await res.json()
    return newTodo
}

export const deleteTodo = async (id) => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE'
    })
    return 'Sukses'
}
