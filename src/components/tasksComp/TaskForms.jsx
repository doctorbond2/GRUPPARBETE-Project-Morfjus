import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TaskForms = ({ handleTimeChange, formatTime, minutes, addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Busywork");

  const fetchTaskData = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTitle(data.activity);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      category,
      estimatedTime: minutes,
      completed: false,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setCategory("Busywork");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Button onClick={fetchTaskData} variant="outline-dark" size="sm">
          <i className="bi bi-dice-6-fill"></i>
        </Button>
        <Form.Control
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Busywork">Busywork</option>
          <option value="Charity">Charity</option>
          <option value="Cooking">Cooking</option>
          <option value="DIY">DIY</option>
          <option value="Education">Education</option>
          <option value="Music">Music</option>
          <option value="Recreational">Recreational</option>
          <option value="Relaxation">Relaxation</option>
          <option value="Social">Social</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Estimated Time: {formatTime(minutes)}</Form.Label>
        <br />
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
        Create task
      </Button>
    </Form>
  );
};

export default TaskForms;
