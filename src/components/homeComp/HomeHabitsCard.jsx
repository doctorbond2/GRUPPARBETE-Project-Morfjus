import React from "react";
import { Card } from "react-bootstrap";
const HomeHabitsCard = ({ habit }) => {
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
          <h2>{habit.streak}</h2>
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
