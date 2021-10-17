import React, { useState } from "react";
import Todos from "../models/Todos";
type TodoContextObj={
    items: Todos[];
    addItem: (data: string) => void;
    removeItem: (id: string) => void;
  }
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addItem: (data: string) => {},
  removeItem: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [Data, setData] = useState<Todos[]>([]);
  const addItemIntoArr = (data: string) => {
    const newData = new Todos(data);
    setData((prev) => prev.concat(newData));
  };
  const subItemFromArr = (id: string) => {
    setData((prev) => prev.filter((item) => item.todoID !== id));
  };
  const TodoValue: TodoContextObj = {
    items: Data,
    addItem: addItemIntoArr,
    removeItem: subItemFromArr,
  };
  return (
    <TodoContext.Provider value={TodoValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
