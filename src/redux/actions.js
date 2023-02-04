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