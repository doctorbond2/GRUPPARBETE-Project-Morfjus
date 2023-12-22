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
  const [sortOption, setSortOption] = useState("A-Z");
  const [filterOption, setFilterOption] = useState("All");

  const handleSortChange = (sortType) => {
    setSortOption(sortType);
  };

  const handleFilterChange = (filterType) => {
    setFilterOption(filterType);
  };

  const sortTasks = (taskList) => {
    switch (sortOption) {
      case "A-Z":
        return [...taskList].sort((a, b) => a.title.localeCompare(b.title));
      case "Z-A":
        return [...taskList].sort((a, b) => b.title.localeCompare(a.title));
      case "High to low":
        return [...taskList].sort((a, b) => b.estimatedTime - a.estimatedTime);
      case "Low to high":
        return [...taskList].sort((a, b) => a.estimatedTime - b.estimatedTime);
      default:
        return taskList;
    }
  };

  const filterAndSortTasks = (taskList) => {
    const filteredTasks =
      filterOption === "All"
        ? taskList
        : taskList.filter((task) => task.category === filterOption);

    return sortTasks(filteredTasks);
  };

  const completedTasks = filterAndSortTasks(
    tasks.filter((task) => task.completed)
  );
  const unCompletedTasks = filterAndSortTasks(
    tasks.filter((task) => !task.completed)
  );

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
          <Button className="m-2" onClick={handleCreateNewTask}>
            Create a new task
          </Button>
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
                <Dropdown.Item onClick={() => handleSortChange("A-Z")}>
                  A-Z
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("Z-A")}>
                  Z-A
                </Dropdown.Item>
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
                <Dropdown.Item onClick={() => handleSortChange("High to low")}>
                  High to low
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("Low to high")}>
                  Low to high
                </Dropdown.Item>
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
                <Dropdown.Item onClick={() => handleFilterChange("All")}>
                  All
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("Busywork")}>
                  Busywork
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("Charity")}>
                  Charity
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("Cooking")}>
                  Cooking
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("DIY")}>
                  DIY
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("Education")}>
                  Education
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("Music")}>
                  Music
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleFilterChange("Recreational")}
                >
                  Recreational
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("Relaxation")}>
                  Relaxation
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange("Social")}>
                  Social
                </Dropdown.Item>
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
