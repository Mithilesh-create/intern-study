import React, { useContext, useRef } from "react";
import { TodoContext } from "./store/TodoContext";

const NewTodoItem :React.FC = () => {
  const dataCtx = useContext(TodoContext)
  const Todoref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data =Todoref.current!.value
    dataCtx.addItem(data);
  };
  
  return (
    <>
      <form action="POST" className="form-horizontal" onSubmit={handleSubmit}>
        <label htmlFor="newTodo">Add Todo</label>
        <input
          type="text"
          autoComplete="off"
          spellCheck="false"
          name="newTodo"
          id="newTodo"
          ref={Todoref}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewTodoItem;
