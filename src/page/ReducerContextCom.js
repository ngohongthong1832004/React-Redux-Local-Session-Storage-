import { useReducer, useRef, useState } from "react";

import Home from "./Home";


// Init
const initState = {
    name : 'Pine',
    jobs : ['Learn Reducer-Context']
} //special

// Action
const FIX_NAME = 'fix-name'
const ADD_JOB = 'add-job'
const DELETE_JOB = 'delete-job'

const fixName = payload => {
    return {
        typeAction : 'fix-name',
        payload
    }
}
const addJob = payload => {
    return {
        typeAction : 'add-job',
        payload
    }
}

const deleteJob = payload => {
    return {
        typeAction : 'delete-job',
        payload
    }
}

//Reducer 
const reducer = ( state, action ) => {
    switch(action.typeAction){
        case FIX_NAME :
            console.log("action :",action)
            return {
                ...state,
                name : action.payload 
            }
        case ADD_JOB :
            console.log("action :",action)
            return {
                ...state,
                jobs : [ ...state.jobs, action.payload ]
            }
        case DELETE_JOB :
            console.log("action :",action)         

            state.jobs.splice(action.payload,1)

            return {
                ...state
            }
        default :
            throw new Error("ERROR")
    }
}




function ReducerContextCom() {
    const fixInputRef = useRef()
    const [fixValue , setFixValue] = useState('')
    const addInputRef = useRef()
    const [addValue , setAadValue] = useState('')


    const [state, dispatch] = useReducer( reducer, initState )


    return ( 
        <Home>
            <div className="Reducer-Context">
                <h1>Reducer-Context</h1>
                <div>
                    <h2>{state.name}</h2>
                    <ul>
                        {state.jobs.map( (item, index) => <p key={index}>{item} <button onClick={ () => dispatch(deleteJob(index))} >Delete</button> </p>)}
                    </ul>
                    <div>
                        <input ref={fixInputRef} value = {fixValue} onChange = { (e)=> setFixValue(e.target.value) }/>
                        <button onClick={ () =>{ dispatch(fixName(fixValue)) ; fixInputRef.current.focus() ; setFixValue('')} }>Fix Name</button>
                    </div>
                    <div>
                        <input ref={addInputRef} value = {addValue} onChange = { e => setAadValue(e.target.value) }/>
                        <button onClick={ () => {dispatch(addJob(addValue)) ; addInputRef.current.focus() ; setAadValue('')} }>Add job</button>
                    </div>
                </div>


            </div>
        </Home>
     );
}

export default ReducerContextCom;