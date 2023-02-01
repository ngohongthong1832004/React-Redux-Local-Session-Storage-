import { useContext, useRef, useState } from "react";

import Home from "./Home";
import { fixName, addJob} from "../StoreReducer/actions"
import { globalState } from "../StoreReducer/Context";

import ItemReducer from './components/ItemReducer'

function ReducerContextCom() {
    const fixInputRef = useRef()
    const addInputRef = useRef()
   
    const [fixValue , setFixValue] = useState('')
    const [addValue , setAadValue] = useState('')

    
    const [state, dispatch] = useContext(globalState)

    const handleFocusAddButton = function(){

        // window.onkeydown = (e)=>{
        //     if(e.keyCode === 13 ){
                
        //     }
        // }
    }
    // console.log(addValue)

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
                        <div style={{marginTop : '10px'}}>
                            <input ref={addInputRef} value = {addValue} onChange = { e => setAadValue(e.target.value) } onFocus = {handleFocusAddButton} />
                            <button onClick={ () => {dispatch(addJob(addValue)) ; addInputRef.current.focus() ; setAadValue('')} }>Add job</button>
                        </div>
                        <ul style={{ padding : 0}}>
                            {state.jobs.map( (item, index) => {
                                return (
                                    <ItemReducer item = {item} index = {index} key = {index} />
                                )
                        })}
                        </ul>
                    </div>
                </div>
        </Home>
     );
}

export default ReducerContextCom;