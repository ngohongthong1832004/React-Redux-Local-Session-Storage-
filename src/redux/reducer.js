

const initState = {
    filter : {
        search : '',
        status : 'All',
        priority : ''
    },
    todoList : [
        { id : 1 , name : "hello", completed : false , priority : 'Hight'},
        { id : 2 , name : "Bap hong Pine", completed : true , priority : 'Low'},
        { id : 3 , name : "BE Nhi", completed : false , priority : 'Medium'}, 
    ]
}


const rootReducer = ( state = initState, action) => {
    console.log(action)
    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList : [...state.todoList, action.payload]
            }
        case 'filters/searchFilterChange' :
            return {
                ...state,
                filter : {
                    ...state.filter,
                    search : action.payload,
                }
            }
        case 'filters/statusFilterChange' :
            return {
                ...state,
                filter : {
                    ...state.filter,
                    status : action.payload
                }
            }
        case 'load':
            return {
                ...state
            }
        default :
    }
}


export default rootReducer