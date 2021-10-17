import Todo from "./components/Todo";
import NewTodoItem from "./components/NewTodoItem";
import "./App.css";
import TodoContextProvider from "./components/store/TodoContext";
function App() {
  // const [ItemData, setItemData] = useState<Todos[]>([]);
  // const todos = [new Todos("Learn React"), new Todos("Learn TypeScript")];
  // const handleData = (data: string) => {
  //   const newTodo = new Todos(data);
  //   setItemData((prev) => prev.concat(newTodo));
  // };
  // const handleRemoveData = (data: string) => {
  //   setItemData((prev) => prev.filter(item=>item.todoID!==data));
  // };
  return (
    // <div className="fullArea">
    //   <NewTodoItem onAddData={handleData} />
    //   <div>
    //     <Todo onClickRemove={handleRemoveData} items={ItemData} />
    //   </div>
    // </div>
    <TodoContextProvider>
      <div className="fullArea">
        <NewTodoItem />
        <div>
          <Todo />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
