import { globalState } from "./Context";

import { useReducer } from "react";
import { initState, reducer } from "./reducer";

function ProviderGlobalState({children}) {

    const [state, dispatch] = useReducer(reducer, initState)


    return ( 
        <globalState.Provider value = {[state, dispatch]}>
            {children}
        </globalState.Provider>
     );
}

export default ProviderGlobalState;