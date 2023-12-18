import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Task({ tasks }) {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup className="p-2 ms-auto">
            {tasks.map((task) => (
              <ListGroup.Item key={task.id}>{task.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="p-2 ms-auto">
            {tasks.map((task) => (
              <ListGroup.Item key={task.id}>{task.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
