export const addTodo = payload =>{
    return {
        type : 'todoList/addTodo',
        payload
    }
}

export const searchFilterChange = payload =>{
    return {
        type : 'filters/searchFilterChange',
        payload
    }
}


export const statusFilterChange = payload =>{
    return {
        type : 'filters/statusFilterChange',
        payload
    }
}

export const priorityFilterChange = payload =>{
    return {
        type : 'filters/priorityFilterChange',
        payload
    }
}

export const checkedStatusChange = payload =>{
    return {
        type : 'todoList/checkedStatusChange',
        payload
    }
}

export const deleteChange = payload =>{
    return {
        type : 'todoList/deleteTodo',
        payload
    }
}