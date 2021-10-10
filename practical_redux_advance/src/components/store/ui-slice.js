import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartIsVisible: false,
  notification: null,
};

export const cartVisibility = createSlice({
  name: "cartVisible",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    cartNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
  },
});

export const cartAction = cartVisibility.actions;
