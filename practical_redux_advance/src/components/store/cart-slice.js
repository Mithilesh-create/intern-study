import { createSlice } from "@reduxjs/toolkit";
import { cartAction } from "./ui-slice";
const initialState = {
  items: [],
  total_quantity: 0,
  changed:false,
};

export const cartOperations = createSlice({
  name: "cartOperationSlice",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.total_quantity = action.payload.total_quantity;
    },
    addItems(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.total_quantity++;
      state.changed =true;
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
      state.changed=true;
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
export const getData = () => {
  return async (dispatch) => {
    const getCartData = async () => {
      const res = await fetch(
        "https://redux-store-5deb9-default-rtdb.firebaseio.com/cart.json"
      );
      if (res.ok) {
        
        const response = await res.json();
        return response;
      } else {
        dispatch(
          cartAction.cartNotification({
            message: "Failed to retrieve data from database Cart...",
            title: "Error",
            status: "error",
          })
        );
      }
    };
    try {
      const cartData = await getCartData();
      if(cartData.items===undefined){
        dispatch(cartOperationAction.replaceCart({
          items:[],
          total_quantity:cartData.total_quantity,
        }));
      }else{
        dispatch(cartOperationAction.replaceCart({
          items: cartData.items,
          total_quantity:cartData.total_quantity,
        }));
      }
    } catch (e) {
      dispatch(
        cartAction.cartNotification({
          message: "Failed to retrieve data from database Cart...",
          title: "Error",
          status: "error",
        })
      );
    }
  };
};
export const updateData = (cart) => {
  return async (dispatch) => {
    try {
      dispatch(
        cartAction.cartNotification({
          message: "Sending data to the Cart...",
          title: "Adding",
          status: "Adding",
        })
      );
      const sendRequest = async () => {
        const response = await fetch(
          "https://redux-store-5deb9-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );
        if (response.ok) {
          dispatch(
            cartAction.cartNotification({
              message: "Successfully sent data to the Cart...",
              title: "Success",
              status: "success",
            })
          );
        }
      };
      try {
        await sendRequest();
        dispatch(
          cartAction.cartNotification({
            message: "Successfully sent data to the Cart...",
            title: "Success",
            status: "success",
          })
        );
      } catch (e) {
        dispatch(
          cartAction.cartNotification({
            message: "Sending Cart Data Failed...",
            title: "Error",
            status: "error",
          })
        );
      }
    } catch (e) {
      dispatch(
        cartAction.cartNotification({
          message: "Sending Cart Data Failed...",
          title: "Error",
          status: "error",
        })
      );
    }
  };
};
export const cartOperationAction = cartOperations.actions;
