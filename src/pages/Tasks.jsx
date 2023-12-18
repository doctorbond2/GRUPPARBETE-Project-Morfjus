import React from "react";
import Task from "../components/tasksComp/Task"; // Adjust the path as necessary
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tasks = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const unCompletedTasks = tasks.filter((task) => !task.completed);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Uncompleted Tasks</h2>
          <ListGroup className="p-2 ms-auto">
            {unCompletedTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h2>Completed Tasks</h2>
          <ListGroup className="p-2 ms-auto">
            {completedTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Tasks;
