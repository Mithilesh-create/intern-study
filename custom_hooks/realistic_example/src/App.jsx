import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useData from "./useData";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequests: fetchTasks } = useData();

  useEffect(() => {
    const transformTasks = (data) => {
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://movie-db-8c1e9-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
