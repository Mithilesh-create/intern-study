import { useDispatch, useSelector } from "react-redux";
// import {
//   AddAction,
//   SubAction,
//   ToggleAction,
//   AddByAmtAction,
// } from "../store/action";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter.counter);
  const counterStateShow = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.TOGGLE());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterStateShow && <div className={classes.value}>{counterState}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(counterActions.INC());
        }}
      >
        Add Counter
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(counterActions.DCR());
        }}
      >
        Sub Counter
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(counterActions.ADDBYAMT(5));
        }}
      >
        Plus 5 Counter
      </button>
    </main>
  );
};

export default Counter;
