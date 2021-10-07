import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartIsVisible: false,
};

export const cartVisibility = createSlice({
  name: "cartVisible",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartAction = cartVisibility.actions;

