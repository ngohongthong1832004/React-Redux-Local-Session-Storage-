import { initState } from "./initState"


const rootReducer = ( state = initState, action) => {
    console.log(action)
    switch(action.type){
        case 'todoList/addTodo':
            const newState =  {
                ...state,
                todoList : [...state.todoList, action.payload]
            }
            localStorage.setItem('initState',JSON.stringify(newState))
            return newState
        case 'todoList/deleteTodo':
            let position
            const newTodo = [...state.todoList]
            newTodo.map((todo, index) => {
                if (todo.id === action.payload){
                    position = index 
                }
            })// eslint-disable-next-line
            newTodo.splice(position,1)


            const newState1 =  {
                ...state,
                todoList : newTodo
            }

            localStorage.setItem('initState',JSON.stringify(newState1))
            return newState1
        case 'todoList/checkedStatusChange' :
            const newState2  = { 
                ...state,
                todoList : state.todoList.map((todo) => {
                    return todo.id === action.payload ? { ...todo, completed : !todo.completed } : {...todo}
                } )
            }

            localStorage.setItem('initState',JSON.stringify(newState2))
            return newState2

        case 'filters/searchFilterChange' :
            const newState3 =  {
                ...state,
                filter : {
                    ...state.filter,
                    search : action.payload,
                }
            }

            localStorage.setItem('initState',JSON.stringify(newState3))

            return newState3
        case 'filters/statusFilterChange' :
            const newState4 =  {
                ...state,
                filter : {
                    ...state.filter,
                    status : action.payload
                }
            }

            localStorage.setItem('initState',JSON.stringify(newState4))
            return newState4
        case 'filters/priorityFilterChange' :
            const newState5 = {
                ...state,
                filter : {
                    ...state.filter,
                    priority : action.payload
                }
            }
            localStorage.setItem('initState',JSON.stringify(newState5))

            return newState5
        case 'load':
            console.log("start load : Pine")
        
            return {
                ...state
            }
        default :
            break;
    }
}


export default rootReducer