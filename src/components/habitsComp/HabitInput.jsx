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
                handleChange(e, "title");
              }}
              type="text"
              placeholder="Start a new good habit!"
            />
            <Form.Text>What will you do next?</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Streak</Form.Label>
            <Form.Control
              style={{ width: "10em" }}
              onChange={(e) => {
                handleChange(e, "streak");
              }}
              type="number"
              placeholder="0-365 days"
              max={365}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              placeholder="Select"
              className="w-25"
              onChange={(e) => {
                handleChange(e, "prio");
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
          <Button onClick={handleSubmit}>Submit new habit</Button>
        </Form>
      </Container>
    </>
  );
};

export default HabitInput;
