import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
          <a onClick={() => onMarkAsCompleted(task.id)}>✔️</a>
        </OverlayTrigger>
      )}

      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 100 }}
        overlay={renderTooltip("Edit")}
      >
        <button>🖊️</button>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 100 }}
        overlay={renderTooltip("Delete")}
      >
        <button>❌</button>
      </OverlayTrigger>
    </ListGroup.Item>
  );
};

export default Task;
