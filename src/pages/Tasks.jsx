import React from "react";
import Task from "../components/tasksComp/Task";
const Tasks = ({ tasks }) => {
  return (
    <>
      <Task tasks={tasks}></Task>
    </>
  );
};

export default Tasks;
