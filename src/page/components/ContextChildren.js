import { useContext, useState } from "react";
import { textContext } from "../../StoreReducer/Context";

function ContextChildren() {

    const [inputValue, setInputValue] = useState('')

    const value = useContext(textContext)

    return ( 
        <div>
            <h3>Context Children </h3>
            <p>{value.text}</p>
            <input value={inputValue}  onChange = { e => setInputValue(e.target.value)} />
            <button onClick={ () => value.fc(inputValue)}> change Text </button>
        </div>
     );
}

export default ContextChildren;