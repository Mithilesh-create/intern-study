import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useData from "../../useData";
const NewTask = (props) => {
  const { isLoading, error, sendRequests: sendTaskHandler } = useData();

  const enterTaskHandler = async (taskText) => {
    const postedData = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    };
    sendTaskHandler(
      {
        url: "https://movie-db-8c1e9-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      postedData
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
