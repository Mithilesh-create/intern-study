import Modal from "./components/Modal";
import BackDrop from "./components/BackDrop";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [Show, setShow] = useState(false);
  const handleOpenModal = () => {
    setShow(true);
  };
  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <>
      <div className="centered">
        <h1>Todo List</h1>
        <div className="mainArea">
          <Todo
            title="Todo Title"
            description="Value"
            onOpenModal={handleOpenModal}
          />
        </div>
      </div>
      {Show && <Modal onCloseModal={handleCloseModal} />}
      {Show && <BackDrop />}
    </>
  );
}

export default App;
