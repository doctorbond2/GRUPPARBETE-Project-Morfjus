import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
const Task = ({ task, onMarkAsCompleted }) => {
  const renderTooltip = (message) => (
    <Tooltip id={`tooltip-${task.id}-${message}`}>{message}</Tooltip>
  );

  return (
    <ListGroup.Item>
      {task.title}

      {!task.completed && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 100 }}
          overlay={renderTooltip("Mark as Completed")}
        >
          <Button
            variant="success"
            size="sm"
            onClick={() => onMarkAsCompleted(task.id)}
          >
            <i class="bi bi-check2-square"></i>
          </Button>
        </OverlayTrigger>
      )}

      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 100 }}
        overlay={renderTooltip("Edit")}
      >
        <Button variant="warning" size="sm">
          <i class="bi bi-pencil-square"></i>
        </Button>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 100 }}
        overlay={renderTooltip("Delete")}
      >
        <Button variant="danger" size="sm">
          <i class="bi bi-trash"></i>
        </Button>
      </OverlayTrigger>
    </ListGroup.Item>
  );
};

export default Task;
