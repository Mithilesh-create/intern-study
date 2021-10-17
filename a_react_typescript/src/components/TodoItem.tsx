import React from "react";
const TodoItem: React.FC<{ itemId: string; todoText: string ,onClickTrigger:()=>void}> = (props) => {
  return (
    <>
      <li onClick={props.onClickTrigger}>{props.todoText}</li>
    </>
  );
};

export default TodoItem;
