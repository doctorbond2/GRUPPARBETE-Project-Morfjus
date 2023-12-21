import React from "react";
import Task from "../components/tasksComp/Task";
import { Row, Col, Button, ListGroup, Container } from "react-bootstrap";
import "../index.css";
import { useNavigate } from 'react-router-dom';

const Tasks = ({ tasks, setTasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const unCompletedTasks = tasks.filter((task) => !task.completed);
  const navigate = useNavigate();

  const handleCreateNewTask = () => {
    navigate('/NewTask');
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const saveEdit = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const markAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Uncompleted Tasks</h2>
          <ListGroup className="p-2 ms-auto">
            {unCompletedTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onMarkAsCompleted={markAsCompleted}
                onSaveEdit={saveEdit}
                onRemoveTask={removeTask}
              />
            ))}
          </ListGroup>
          <Button onClick={handleCreateNewTask}>Create a new task</Button>
        </Col>
        <Col>
          <h2>Completed Tasks</h2>
          <ListGroup className="p-2 ms-auto">
            {completedTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onMarkAsCompleted={markAsCompleted}
                onSaveEdit={saveEdit}
                onRemoveTask={removeTask}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Tasks;
