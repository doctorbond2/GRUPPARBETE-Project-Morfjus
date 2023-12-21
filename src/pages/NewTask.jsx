import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const NewTask = ({}) => {
  const [minutes, setMinutes] = useState(5);
  const handleTimeChange = (event) => {
    setMinutes(event.target.value);
  };

  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes} minutes`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hour${hours > 1 ? "s" : ""} ${
      remainingMinutes > 0 ? `${remainingMinutes} minutes` : ""
    }`;
  };

  return (
    <Container>
      <h1>Create a new task</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Button  variant="outline-dark" size="sm">
            <i class="bi bi-dice-6-fill"></i>
          </Button>
          <Form.Control placeholder="Task title" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder="Task description" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select>
            <option>Busywork</option>
            <option>Charity</option>
            <option>Cooking</option>
            <option>DIY</option>
            <option>Education</option>
            <option>Music</option>
            <option>Recreational</option>
            <option>Relaxation</option>
            <option>Social</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Estimated Time: {formatTime(minutes)}</Form.Label>
          <br></br>
          <Form.Range
            style={{ width: "50%" }}
            min="5"
            max="120"
            step="5"
            value={minutes}
            onChange={handleTimeChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default NewTask;
