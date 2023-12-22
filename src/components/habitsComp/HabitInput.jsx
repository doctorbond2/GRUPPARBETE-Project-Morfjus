import React from "react";
import { Form, Button, Container, FormSelect, Dropdown } from "react-bootstrap";
const HabitInput = ({ handleChange, handleSubmit, habits, setHabits }) => {
  return (
    <>
      <Container>
        <Form className="w-100">
          <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
            <Form.Label>New habit</Form.Label>
            <Form.Control
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              placeholder="YOLO"
            />
            <Form.Text>What will you do next?</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Streak</Form.Label>
            <Form.Control
              className="w-25"
              onChange={(e) => {
                handleChange(e);
              }}
              type="number"
              placeholder="Why start at zero?"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              placeholder="Select"
              className="w-25"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option selected disabled={true}>
                Priority
              </option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default HabitInput;
