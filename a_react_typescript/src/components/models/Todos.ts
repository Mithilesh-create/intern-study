// class Todos {
//   todoID: string;
//   todoText: string;
//   constructor(data: string) {
//     (this.todoText = data), (this.todoID = new Date().toISOString());
//   }
// }
// export default Todos;
class Todos {
  todoID: string;
  todoText: string;

  constructor(todoText: string) {
    this.todoText = todoText;
    this.todoID = new Date().toISOString();
  }
}

export default Todos;