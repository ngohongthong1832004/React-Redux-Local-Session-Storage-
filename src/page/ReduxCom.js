import { useContext, useState, useRef } from "react";

import Home from "./Home";
import { globalState } from "../StoreReducer/Context";
import { addJob } from "../StoreReducer/actions";

function ReduxCom() {
    const addInputRef = useRef()

    const [addValue , setAadValue] = useState('')

    const [state, dispatch] = useContext(globalState)

    // console.log([state , dispatch])

    return ( 
        <Home>
            <div className="Redux">
                <h1>Redux</h1>
                <div>
                    <div>
                        <input ref={addInputRef} value = {addValue} onChange = { e => setAadValue(e.target.value) }/>
                        <button onClick={ () => {dispatch(addJob(addValue)) ; addInputRef.current.focus() ; setAadValue('')} }>Add job</button>
                    </div>
                </div>
            </div>
        </Home>
     );
}

export default ReduxCom;