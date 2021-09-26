import React from "react";

const FoodCartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item)=>{},
  removeItems: (id)=>{},
});

export default FoodCartContext;