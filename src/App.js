import { BrowserRouter, Route ,Routes } from "react-router-dom";

import "./App.css";
import ReduxCom from "./page/ReduxCom";
import ReducerContextCom from "./page/ReducerContextCom";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="redux" element={<ReduxCom />} />
          {/* <Route path="reducer-context" element={<ReducerContextCom />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
