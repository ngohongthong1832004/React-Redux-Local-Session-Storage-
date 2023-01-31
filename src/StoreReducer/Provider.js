import { useState } from "react";
import { textContext } from "./Context";


function ProviderContext({children}) {
    const [text ,setText] = useState('hello') 

    const fcGlobal = (e) => { setText(e) }

    return ( 
        <textContext.Provider value = {{text ,fc: fcGlobal}}>
            {children}
        </textContext.Provider>
     );
}

export default ProviderContext;