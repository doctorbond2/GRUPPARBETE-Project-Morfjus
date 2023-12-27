import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import FriendsHome from "../components/compFriends/FriendsHome";
import { Link } from "react-router-dom";
import HomeHabitsCard from "../components/homeComp/HomeHabitsCard";
import HomeTaskCard from "../components/homeComp/HomeTaskCard";
import { useNavigate } from "react-router-dom";
const Home = ({ habits, setHabits, friends, setFriends, tasks, setTasks }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="container-fluid">
        <Row style={{ minHeight: "100vh" }}>
          <Col className="col-3">
            <h2 className="d-flex justify-content-center m-3">
              Recent Friends
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
              className="m-3 home-title-h2-general"
              onClick={() => {
                navigate("/habits");
              }}
            >
              Habits
            </h2>
            <div>
              {habits &&
                habits
                  .map((habit, i) => <HomeHabitsCard key={i} {...{ habit }} />)
                  .slice(-3)}
            </div>
            <h2
              className="m-3 home-title-h2-general"
              onClick={() => {
                navigate("/tasks");
              }}
            >
              Tasks
            </h2>
            <div className="d-flex h-50">
              {tasks &&
                tasks
                  .map((task, i) => <HomeTaskCard key={i} {...{ task }} />)
                  .slice(-3)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
