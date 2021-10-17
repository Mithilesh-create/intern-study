import React, { useContext } from "react";
import { TodoContext } from "./store/TodoContext";
import TodoItem from "./TodoItem";

const Todo: React.FC = () => {
  const dataCtx = useContext(TodoContext);
  const removeItemsArray=(data:string)=>{
    dataCtx.removeItem(data);
  }
  return (
    <>
      <ul className="list-group">
        {dataCtx.items.map((item) => (
          <TodoItem
            onClickTrigger={removeItemsArray.bind(null, item.todoID)}
            key={item.todoID}
            itemId={item.todoID}
            todoText={item.todoText}
          />
        ))}
      </ul>
    </>
  );
};

export default Todo;
