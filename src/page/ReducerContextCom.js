import { useReducer, useRef, useState } from "react";

import Home from "./Home";
import { reducer, initState } from '../StoreReducer/reducer'
import { fixName, addJob, deleteJob, editJob } from "../StoreReducer/actions"
import ContextChildren from "./components/ContextChildren";
import ProviderContext from "../StoreReducer/Provider";


function ReducerContextCom() {
    const fixInputRef = useRef()
    const addInputRef = useRef()
    const editInputRef = useRef()
   
    const [fixValue , setFixValue] = useState('')
    const [addValue , setAadValue] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [editValue, setEditValue] = useState('')
    
    const [state, dispatch] = useReducer( reducer, initState )

    return ( 
        <Home>
            <div className="Reducer-Context">
                <h1>Reducer-Context</h1>
                <div>
                    <h2>{state.name}</h2>

                    <div>
                        <input ref={fixInputRef} value = {fixValue} onChange = { (e)=> setFixValue(e.target.value) }/>
                        <button onClick={ () =>{ dispatch(fixName(fixValue)) ; fixInputRef.current.focus() ; setFixValue('')} }>Fix Name</button>
                    </div>
                    <div>
                        <input ref={addInputRef} value = {addValue} onChange = { e => setAadValue(e.target.value) }/>
                        <button onClick={ () => {dispatch(addJob(addValue)) ; addInputRef.current.focus() ; setAadValue('')} }>Add job</button>
                    </div>
                    <ProviderContext>
                        <div>
                            <h2>Test Context</h2>
                            <ContextChildren/>
                        </div>
                    </ProviderContext>
                    <ul >
                        {state.jobs.map( (item, index) => {
                            return (
                                // <ItemReducer item = {item} index = {index} key = {index} cb = {cb}/>
                                <li key={index} style = {{listStyle : 'none' , display : 'flex' , justifyContent : "center" , alignItems : "center"}}>
                                    <span style={{padding : '10px' , color : "blue", width : '50px' }}> {index + 1} </span>
                                    <div  style={{padding : '10px' ,width : '35vw', display :"flex"}}>
                                        {isEdit ? <input value={editValue} onChange = { e => setEditValue(e.target.value) } ref = {editInputRef} style = {{backgroundColor : "transparent" , border : "none"  , outline : 'none' ,borderBottom : "1px solid white" , width : '100%' , fontSize : '15px'}}></input> : <span> {item} </span>}
                                    </div>
                                    {
                                        isEdit ? <div>
                                            <button onClick={ () => {dispatch(editJob(editValue,index)) ; setIsEdit(false)} }>Save</button>
                                            <button onClick={ () => setIsEdit(false)}>Cancel</button>
                                        </div> : 
                                        <button onClick={ () => {setIsEdit(!isEdit) ; setEditValue(item) ; setTimeout(() => editInputRef.current.focus(),0) }} style = {{height : '30px', margin : '10px 5px'}} >
                                            Edit
                                        </button>
                                    }
                                    <button onClick={ () => dispatch(deleteJob(index))} style = {{height : '30px', margin : '10px 5px'}} >Delete</button>
                                </li>
                            )
                    })}
                    </ul>
                </div>


            </div>
        </Home>
     );
}

export default ReducerContextCom;