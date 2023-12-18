import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Task = ({ task }) => {
  const renderTooltip = (message) => (
    <Tooltip id={`tooltip-${task.id}-${message}`}>{message}</Tooltip>
  );

  return (
    <ListGroup.Item>
      {task.title}

      {!task.completed && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Mark as Completed")}
        >
          <button>✔️</button>
        </OverlayTrigger>
      )}

      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip("Edit")}
      >
        <button>🖊️</button>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip("Delete")}
      >
        <button>❌</button>
      </OverlayTrigger>
    </ListGroup.Item>
  );
};

export default Task;
