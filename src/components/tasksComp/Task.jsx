import React, { useState } from "react";
import {
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  ListGroup,
  InputGroup,
  Form,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Task = ({ task, onMarkAsCompleted, onSaveEdit, onRemoveTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const renderTooltip = (message) => (
    <Tooltip id={`tooltip-${task.id}-${message}`}>{message}</Tooltip>
  );

  const handleSave = () => {
    onSaveEdit(task.id, editedTitle);
    setIsEditing(false);
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
    <ListGroup.Item>
      <Row className="align-items-start">
        <Col className="flex-grow-1">
          {isEditing ? (
            <InputGroup>
              <Form.Control
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <Button variant="outline-secondary" onClick={handleSave}>
                Save
              </Button>
            </InputGroup>
          ) : (
            <>
              <span>
                <h3>{task.title}</h3>
              </span>
              <h5>{task.description}</h5>
              <h5>{formatTime(task.estimatedTime)}</h5>
              <h5>{task.title}</h5>
            </>
          )}
        </Col>
        <Col xs="auto">
          <div className="d-flex flex-column justify-content-end">
            {!task.completed && (
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 100 }}
                overlay={renderTooltip("Mark as Completed")}
              >
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => onMarkAsCompleted(task.id)}
                >
                  <i className="bi bi-check2-square"></i>
                </Button>
              </OverlayTrigger>
            )}

            {!isEditing && (
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 100 }}
                overlay={renderTooltip("Edit")}
              >
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="warning"
                  size="sm"
                >
                  <i className="bi bi-pencil-square"></i>
                </Button>
              </OverlayTrigger>
            )}

            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 100 }}
              overlay={renderTooltip("Delete")}
            >
              <Button
                variant="danger"
                size="sm"
                onClick={() => onRemoveTask(task.id)}
              >
                <i className="bi bi-trash"></i>
              </Button>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Task;
