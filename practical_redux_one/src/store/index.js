import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";
const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    INC(state) {
      state.counter++;
    },
    DCR(state) {
      state.counter--;
    },
    ADDBYAMT(state, action) {
      state.counter = state.counter + action.payload;
    },
    TOGGLE(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialLoginState = {
  login: false,
};
const loginCounter = createSlice({
  name: "login_counter",
  initialState: initialLoginState,
  reducers: {
    userLogin(state) {
      state.login = true;
    },
    userLogout(state) {
      state.login = false;
    },
  },
});
// const CounterReducer = (state = initialState, action) => {
//   if (action.type === "INC") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DCR") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "Toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   if (action.type === "AddByAMT") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }
//   return state;
// };
export const counterActions = counterSlice.actions;
export const counterloginActions = loginCounter.actions;
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    loginCounter: loginCounter.reducer,
  },
});

export default store;
