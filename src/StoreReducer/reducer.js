import { ADD_JOB, DELETE_JOB, EDIT_JOB, FIX_NAME } from './constants'



// Init
export const initState = {
    name : 'Pine',
    jobs : ['Learn Reducer-Context']
}


//Reducer 
export const reducer = ( state, action ) => {
    switch(action.typeAction){
        case FIX_NAME :
            console.log("action :",action)
            return {
                ...state,
                name : action.payload 
            }
        case ADD_JOB :
            console.log("action :",action)

            console.log(state)

            return {
                ...state,
                jobs : [ ...state.jobs, action.payload ]
            }
        case DELETE_JOB :
            console.log("action :",action)         

            const newJobs = [...state.jobs]

            newJobs.splice(action.payload,1)
 
            return {
                ...state,
                jobs : newJobs
            }
        case EDIT_JOB :
            console.log("action :",action)         

            state.jobs[action.index] = action.payload

            return {
                ...state,
            }
        default :
            throw new Error("ERROR")
    }
}