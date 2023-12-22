import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import FriendsHome from "../components/compFriends/FriendsHome";
import { Link, useNavigate } from "react-router-dom";
import HomeHabitsCard from "../components/homeComp/HomeHabitsCard";
import HomeTaskCard from "../components/homeComp/HomeTaskCard";
const Home = ({ habits, setHabits, friends, setFriends, tasks, setTasks }) => {
  const navigate = useNavigate();
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
            <Link color="$primary" className="friends-link" to="/friends">
              <h3 className="friends-link text-color d-flex justify-content-center m-2">
                All Friends
              </h3>
            </Link>
          </Col>
          <Col>
            <h2
              style={{ cursor: "pointer", width: "fit-content" }}
              onClick={() => {
                navigate("/habits");
              }}
            >
              Habits
            </h2>
            <div className="d-flex h-50" style={{ border: "1px solid red" }}>
              {habits &&
                habits
                  .map((habit, i) => <HomeHabitsCard {...{ habit }} />)
                  .slice(-3)}
            </div>
            <h2
              style={{ cursor: "pointer", width: "fit-content" }}
              onClick={() => {
                navigate("/tasks");
              }}
            >
              Tasks
            </h2>
            <div className="d-flex h-50" style={{ border: "1px solid red" }}>
              {tasks &&
                tasks.map((task) => <HomeTaskCard {...{ task }} />).slice(-3)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
