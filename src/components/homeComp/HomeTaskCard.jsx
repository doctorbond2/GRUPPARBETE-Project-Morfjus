import React from "react";
import { Card } from "react-bootstrap";

const HomeTaskCard = ({ task }) => {
  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes} minutes`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hour${hours > 1 ? "s" : ""} ${
      remainingMinutes > 0 ? `${remainingMinutes} minutes` : ""
    }`;
  };
  // id: 3,
  // title: "Walk cat",
  // description: "Take Mr. Whiskers for his evening stroll.",
  // category: "Relaxation",
  // estimatedTime: 45,
  // completed: true,
  return (
    <>
      <Card>
        <Card.Header>
          <h2>{task.title}</h2>
        </Card.Header>
        <Card.Body>
          <h5>{task.description}</h5>
        </Card.Body>
        <Card.Footer>
          <h5 style={task.completed ? { color: "green" } : { color: "red" }}>
            {task.completed ? "Task complete!" : "In progress"}
          </h5>
          <i>
            <h6>Time remaining: {formatTime(task.estimatedTime)}</h6>
          </i>
          <i style={{ color: "gray" }}>
            <h6>Category: {task.category}</h6>
          </i>
        </Card.Footer>
      </Card>
    </>
  );
};

export default HomeTaskCard;
