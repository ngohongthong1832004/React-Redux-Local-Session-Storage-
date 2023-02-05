

const initState = {
    filter : {
        search : '',
        status : 'All',
        priority : '',
    },
    todoList : [
        { id : 1 , name : "Learn React", completed : false , priority : 'High'},
        { id : 2 , name : "Learn Redux", completed : false , priority : 'High'},
        { id : 3 , name : "Learn nodeJS", completed : false , priority : 'Low'}, 
    ]
}


const rootReducer = ( state = initState, action) => {
    console.log(action)
    switch(action.type){
        case 'todoList/addTodo':
            const newState =  {
                ...state,
                todoList : [...state.todoList, action.payload]
            }
            localStorage.setItem('innitState',JSON.stringify(newState))
            return newState
        case 'todoList/deleteTodo':
            console.log((JSON.parse(localStorage.getItem('innitState'))))
            let position
            const newTodo = [...state.todoList]
            newTodo.map((todo, index) => {
                if (todo.id === action.payload){
                    position = index 
                }
            })
            newTodo.splice(position,1)


            return {
                ...state,
                todoList : newTodo
            }
        case 'todoList/checkedStatusChange' :
            return {
                ...state,
                todoList : state.todoList.map((todo) => {
                    return todo.id === action.payload ? { ...todo, completed : !todo.completed } : {...todo}
                } )
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
        case 'filters/priorityFilterChange' :
            return {
                ...state,
                filter : {
                    ...state.filter,
                    priority : action.payload
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