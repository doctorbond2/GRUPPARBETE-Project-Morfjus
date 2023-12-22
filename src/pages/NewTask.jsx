import React, { useState } from "react";
import TaskForms from "../components/tasksComp/TaskForms";
import { Button, Form, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const NewTask = () => {
  const [minutes, setMinutes] = useState(5);
  const handleTimeChange = (event) => {
    setMinutes(event.target.value);
  };

  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes} minutes`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hour${hours > 1 ? "s" : ""} ${
      remainingMinutes > 0 ? `${remainingMinutes} minutes` : ""
    }`;
  };

  return (
    <Container>
      <h1>Create a new task</h1>
      <TaskForms
        handleTimeChange={handleTimeChange}
        formatTime={formatTime}
        minutes={minutes}
      ></TaskForms>
    </Container>
  );
};

export default NewTask;
