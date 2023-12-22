import React, { useState } from "react";
import Task from "../components/tasksComp/Task";
import {
  Row,
  Col,
  Button,
  ListGroup,
  Container,
  Offcanvas,
  Dropdown,
} from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Tasks = ({ tasks, setTasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const unCompletedTasks = tasks.filter((task) => !task.completed);
  const navigate = useNavigate();

  const handleCreateNewTask = () => {
    navigate("/NewTask");
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      {/* Place the button in its own row at the top, aligned to the right */}
      <Row className="justify-content-end">
        <Col md="auto">
          <Button variant="primary" onClick={handleShow}>
            Filter results <i className="bi bi-filter-right"></i>
          </Button>
        </Col>
      </Row>
      <Row>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter & sort</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {" "}
            <Dropdown className="mb-3">
              <Dropdown.Toggle
                style={{
                  width: "366px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="success"
                id="dropdown-basic"
              >
                Sort by A-Z
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-3">
              <Dropdown.Toggle
                style={{
                  width: "366px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="success"
                id="dropdown-basic"
              >
                Sort by time
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-3">
              <Dropdown.Toggle
                style={{
                  width: "366px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="success"
                id="dropdown-basic"
              >
                Sort by category
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
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
