import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  total_quantity: 0,
};

export const cartOperations = createSlice({
  name: "cartOperationSlice",
  initialState,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.total_quantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          item_name: newItem.title,
          quantity: 1,
          total_price: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total_price = existingItem.total_price + newItem.price;
      }
    },
    subItems(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.total_quantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total_price =
          existingItem.total_price - existingItem.price;
      }
    },
  },
});

export const cartOperationAction = cartOperations.actions;
