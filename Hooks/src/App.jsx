import React, {  useReducer } from "react";
import "./App.css";
import ComA from "./ComA";
const App = () => {
  const reducer = (state, action) => {
    if (action.type === "Add_value") {
      return state + action.payload;
    } else if (action.type === "Sub_value") {
      return state - action.payload;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  const addVal = {
    type: "Add_value",
    payload: 1,
  };
  const subVal = {
    type: "Sub_value",
    payload: 1,
  };
  

  return (
    <>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch(addVal);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(subVal);
        }}
      >
        Subtract
      </button>
        
      <ComA/>
    </>
  );
};

export default App;
