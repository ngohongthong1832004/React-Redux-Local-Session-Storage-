
export const todoListSelector = (state) => {
    const todoFilter =  state?.todoList.filter( todo => {
        if(state?.filter?.status === "All"){
            if( state?.filter?.priority.length){
                return todo.name.includes( state?.filter?.search) && state?.filter?.priority.includes(todo.priority)
            }else{
                return todo.name.includes( state?.filter?.search)
            }
        }
        if(state?.filter?.status === "Completed") {
            if( state?.filter?.priority.length){
                return todo.name.includes( state?.filter?.search) && state?.filter?.priority.includes(todo.priority) && todo.completed
            }else{
                return todo.name.includes( state?.filter?.search) && todo.completed
            }
        }
        if( state?.filter?.status === "Todo") {
            if( state?.filter?.priority.length){
                return todo.name.includes( state?.filter?.search) && state?.filter?.priority.includes(todo.priority) && !todo.completed
            }else{
                return todo.name.includes( state?.filter?.search) && !todo.completed
            }
        }
    })
    return todoFilter
}


export const searchTextFilter = state => state?.filter?.search

export const statusFilter = state => state?.filter?.status

export const priorityFilter = state => state?.filter?.priority

