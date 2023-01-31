import { useReducer, useState, useRef } from "react";


import { deleteJob, editJob } from "C:/Users/HP/workPlace/Redux-local-session/my-app/src/StoreReducer/actions"
import {reducer, initState} from 'C:/Users/HP/workPlace/Redux-local-session/my-app/src/StoreReducer/reducer'

function ItemReducer( {item, index, cb} ) {

    const editInputRef = useRef()

    const [isEdit, setIsEdit] = useState(false)
    const [editValue, setEditValue] = useState('')


    const [state, dispatch] = useReducer( reducer, initState )

    console.log(state.jobs)

   

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
      <div style={{ padding: "10px", width: "35vw", display: "flex" }}>
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
              cb(Math.random())
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
        onClick={() => {dispatch(deleteJob(index)) ;  cb(Math.random())}}
        style={{ height: "30px", margin: "10px 5px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default ItemReducer;
