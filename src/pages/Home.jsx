import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import FriendsHome from "../components/compFriends/FriendsHome";
import { Link } from "react-router-dom";
const Home = ({ habits, setHabits, friends, setFriends, tasks, setTasks }) => {
  return (
    <>
      <Container className="container-fluid">
        <Row style={{ minHeight: "100vh" }}>
          <Col className="col-3">
            <h2 className="d-flex justify-content-center m-3">
              Latest 5 Friends
            </h2>
            <div>
              {friends
                .map((friendsObj, i) => {
                  return <FriendsHome data={friendsObj} key={i} />;
                })
                .slice(-5)}
            </div>
            <Link color="$primary" className="friendsLink" to="/friends">
              <h3 className="friendsLink compColor textColor d-flex justify-content-center m-2">
                All Friends
              </h3>
            </Link>
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
