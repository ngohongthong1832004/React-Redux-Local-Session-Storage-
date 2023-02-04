
export const todoListSelector = (state) => {
    const todoFilter =  state?.todoList.filter( todo => {
        if(state?.filter?.status === "All"){
            return todo.name.includes( state?.filter?.search)
        }
        if(state?.filter?.status === "Completed") {
            return todo.name.includes( state?.filter?.search) && todo.completed
        }
        if( state?.filter?.status === "Todo") {
            return todo.name.includes( state?.filter?.search) && !todo.completed
        }
    })
    return todoFilter
}


export const searchTextFilter = state => state?.filter?.search

export const statusFilter = state => state?.filter?.status

