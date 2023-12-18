import React from "react";
import { Card, Button } from "react-bootstrap";

const Habit = ({ habitItem }) => {
  const {
    streak,
    title,
    prio: { str, tier },
  } = habitItem;
  const handleActiveStreak = () => {
    console.log(streak);
  };
  return (
    <>
      <Card>
        <Card.Header>
          <h2>{title}</h2>
        </Card.Header>
        <Card.Body>
          <h5>Activity Streak: {streak}</h5>
          <Button
            onClick={() => {
              handleActiveStreak();
            }}
            variant={"success"}
            value="inc"
          >
            +1
          </Button>
          <Button
            onClick={() => {
              handleActiveStreak();
            }}
            variant={"warning"}
            value="dec"
          >
            -1
          </Button>
          <h6>Priority: {str}</h6>
        </Card.Body>
      </Card>
    </>
  );
};

export default Habit;
