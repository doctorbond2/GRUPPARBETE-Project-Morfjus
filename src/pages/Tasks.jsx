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
      <Row className="justify-content-end">
        <Col md="auto">
          <Button variant="primary" onClick={handleShow}>
            Filter results <i className="bi bi-filter-right"></i>
          </Button>
        </Col>
      </Row>
      <Row>
        <Offcanvas
          style={{ backgroundColor: "#b0bfcc" }}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter & sort</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {" "}
            <Dropdown className="mb-3">
              <Dropdown.Toggle
                style={{
                  width: "366px",
                  backgroundColor: "#D7E8F7",
                  color: "black",
                  border: "0px",
                }}
                variant="dark"
                id="dropdown-basic"
              >
                Sort by A-Z
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
                <Dropdown.Item href="#/action-1">A-Z</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Z-A</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-3">
              <Dropdown.Toggle
                style={{
                  width: "366px",
                  backgroundColor: "#D7E8F7",
                  color: "black",
                  border: "0px",
                }}
                variant="dark"
                id="dropdown-basic"
              >
                Sort by time
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
                <Dropdown.Item href="#/action-1">High to low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-3">
              <Dropdown.Toggle
                style={{
                  width: "366px",
                  backgroundColor: "#D7E8F7",
                  color: "black",
                  border: "0px",
                }}
                variant="dark"
                id="dropdown-basic"
              >
                Sort by category
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
                <Dropdown.Item href="#/action-1">Busywork</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Charity</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cooking</Dropdown.Item>
                <Dropdown.Item href="#/action-4">DIY</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Education</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Music</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Recreational</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Relaxation</Dropdown.Item>
                <Dropdown.Item href="#/action-9">Social</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </Container>
  );
};

export default Tasks;
