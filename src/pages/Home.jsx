import React from "react";
import { Col, Row, Container } from "react-bootstrap";
const Home = ({ habits, setHabits, friends, setFriends, tasks, setTasks }) => {
  return (
    <>
      <Container className="container-fluid">
        <Row style={{ minHeight: "100vh", backgroundColor: "lightgray" }}>
          <Col className="col-3" style={{ border: "1px solid black" }}>
            <div></div>
          </Col>
          <Col>
            <div className="d-flex h-50" style={{ border: "1px solid red" }}>
              HABITS{habits && habits.map((x, i) => <h2>{x.title}</h2>)}
            </div>
            <div className="d-flex h-50" style={{ border: "1px solid red" }}>
              TASKS {tasks && tasks.map((x) => <h2>{x.title}</h2>)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
