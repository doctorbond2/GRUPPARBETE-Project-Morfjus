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
  Accordion,
} from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Tasks = ({ tasks, setTasks }) => {
  const [sortOption, setSortOption] = useState("Ascending");
  const [filterOption, setFilterOption] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSortChange = (sortType) => {
    setSortOption(sortType);
  };

  const handleFilterChange = (filterType) => {
    setFilterOption(filterType);
  };

  const sortTasks = (taskList) => {
    switch (sortOption) {
      case "Ascending":
        return [...taskList].sort((a, b) => a.title.localeCompare(b.title));
      case "Descending":
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

  const handleCategorySelect = (category) => {
    handleFilterChange(category);
    setSelectedCategory(category);
  };

  const isCategorySelected = (category) => {
    return selectedCategory === category;
  };

  const handleSortSelect = (sortType) => {
    setSortOption(sortType);
  };

  const isSortSelected = (sortType) => {
    return sortOption === sortType;
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
            <Accordion defaultActiveKey="0" className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sort Alphabetically</Accordion.Header>
                <Accordion.Body>
                  {["Ascending", "Descending"].map((sortType) => (
                    <Button
                      key={sortType}
                      variant={
                        isSortSelected(sortType) ? "primary" : "secondary"
                      }
                      onClick={() => handleSortSelect(sortType)}
                      className="mb-2"
                    >
                      {sortType}
                    </Button>
                  ))}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Sort by duration</Accordion.Header>
                <Accordion.Body>
                  <Button
                    variant={
                      sortOption === "ShortestFirst" ? "primary" : "secondary"
                    }
                    onClick={() => handleSortSelect("ShortestFirst")}
                    className="mb-2"
                  >
                    Shortest Tasks First
                  </Button>
                  <Button
                    variant={
                      sortOption === "LongestFirst" ? "primary" : "secondary"
                    }
                    onClick={() => handleSortSelect("LongestFirst")}
                    className="mb-2"
                  >
                    Longest Tasks First
                  </Button>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Sort by category</Accordion.Header>
                <Accordion.Body>
                  {[
                    "All",
                    "Busywork",
                    "Charity",
                    "Cooking",
                    "DIY",
                    "Education",
                    "Music",
                    "Recreational",
                    "Relaxation",
                    "Social",
                  ].map((category) => (
                    <Button
                      key={category}
                      variant={
                        isCategorySelected(category) ? "primary" : "secondary"
                      }
                      onClick={() => handleCategorySelect(category)}
                      className="mb-2"
                    >
                      {category}
                    </Button>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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
