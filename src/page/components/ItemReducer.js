import { useState, useRef, useContext } from "react";


import { deleteJob, editJob } from "../../StoreReducer/actions";
import { globalState } from "../../StoreReducer/Context";

function ItemReducer( {item, index} ) {

    const editInputRef = useRef()

    const [isEdit, setIsEdit] = useState(false)
    const [editValue, setEditValue] = useState('')


    const [state, dispatch] = useContext(globalState)

    // console.log(state.jobs)

   

  return (
    <li
      key={index}
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ padding: "10px", color: "blue", width: "50px" }}>
        {" "}
        {index + 1}{" "}
      </span>
      <div style={{ padding: "10px", width: "55vw", display: "flex" }}>
        {isEdit ? (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            ref={editInputRef}
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              borderBottom: "1px solid white",
              width: "100%",
              fontSize: "15px",
            }}
          ></input>
        ) : (
          <span> {item} <div style={{display:'none'}}>{state.jobs}</div> </span>
        )}
      </div>
      {isEdit ? (
        <div>
          <button
            onClick={() => {
              dispatch(editJob(editValue, index));
              setIsEdit(false);
             
            }}
          >
            Save
          </button>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsEdit(!isEdit);
            setEditValue(item);
            setTimeout(() => editInputRef.current.focus(), 0);
          }}
          style={{ height: "30px", margin: "10px 5px" }}
        >
          Edit
        </button>
      )}
      <button
        onClick={() => {dispatch(deleteJob(index))}}
        style={{ height: "30px", margin: "10px 5px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default ItemReducer;
