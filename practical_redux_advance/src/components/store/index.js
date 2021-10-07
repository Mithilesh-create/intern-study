import { configureStore } from "@reduxjs/toolkit";
import { cartOperations } from "./cart-slice";
import { cartVisibility } from "./ui-slice";

const store = configureStore({
  reducer: {
    cartDisplay: cartVisibility.reducer,
    cartOperations: cartOperations.reducer,
  },
});

export default store;
