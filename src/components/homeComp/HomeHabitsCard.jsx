import React from "react";
import { Card, ProgressBar, Row, Col } from "react-bootstrap";
const HomeHabitsCard = ({ habit }) => {
  const {
    streak,
    title,
    prio: { str, tier },
  } = habit;
  // title: "Daily meditation",
  // streak: 12,
  // prio: { str: "High", tier: 3 },
  return (
    <>
      <Card className="h-50 m-2 bg-primary">
        <Card.Header>
          <h2>{habit.title}</h2>
        </Card.Header>
        <Card.Body className="card-habits-body">
          {" "}
          <h4>
            {" "}
            Activity Streak:{" "}
            <small className={streak > 5 ? "habits-activity-streak-color" : ""}>
              {streak}
            </small>
            {""} days in a row
          </h4>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="col-1">
              <h5 style={{ marginLeft: "2em", marginBottom: "0" }}>0</h5>
            </Col>
            <Col>
              <ProgressBar
                now={streak}
                max={365}
                variant="success"
                style={{ backgroundColor: "lightblue" }}
                animated
              />
            </Col>
            <Col className="col-6">
              {" "}
              <h5 style={{ marginBottom: "0" }}>365</h5>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <h5>
            Priority: {""}
            {
              <span
                style={
                  habit.prio.str === "High"
                    ? { color: "red" }
                    : habit.prio.str === "Medium"
                    ? { color: "blue" }
                    : { color: "purple" }
                }
              >
                {habit.prio.str}
              </span>
            }
          </h5>
        </Card.Footer>
      </Card>
    </>
  );
};

export default HomeHabitsCard;
