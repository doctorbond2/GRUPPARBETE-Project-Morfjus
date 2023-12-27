import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  ProgressBar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const Habit = ({
  habitItem,
  sortedHabits,
  setSortedHabits,
  habitItemIndex,
  setHabits,
  habits,
}) => {
  const {
    streak,
    title,
    prio: { str, tier },
  } = habitItem;
  const handleActiveStreak = (e) => {
    let updatedHabits = "";
    switch (e.target.value) {
      case "inc": {
        updatedHabits = sortedHabits.map((x, i) => {
          if (habitItemIndex === i) {
            return { ...x, streak: x.streak + 1 };
          }
          return x;
        });
        setSortedHabits(updatedHabits);
        setHabits(updatedHabits);
        break;
      }
      case "dec": {
        if (streak !== 0) {
          updatedHabits = sortedHabits.map((x, i) => {
            if (habitItemIndex === i) {
              return { ...x, streak: x.streak - 1 };
            }
            return x;
          });
          setSortedHabits(updatedHabits);
          setHabits(updatedHabits);
        }
        break;
      }
      case "reset":
        {
          if (streak !== 0) {
            updatedHabits = sortedHabits.map((x, i) => {
              if (habitItemIndex === i) {
                return { ...x, streak: 0 };
              }
              return x;
            });
            setSortedHabits(updatedHabits);
            setHabits(updatedHabits);
          }
        }
        break;
    }
  };
  const handleDelete = (target) => {
    let updatedHabits = [...habits].filter((x, i) => {
      return i !== target;
    });
    setHabits(updatedHabits);
    setSortedHabits(updatedHabits);
    console.log(habits);
  };
  const renderTooltip = (message) => (
    <Tooltip
      style={{ maxWidth: "200px", zIndex: "10" }}
      id={`tooltip-${message}`}
    >
      {message}
    </Tooltip>
  );
  return (
    <>
      <Card>
        <Card.Header>
          <h3>{title}</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <h5>
                Activity Streak:{" "}
                <small
                  className={streak > 5 ? "habits-activity-streak-color" : ""}
                >
                  {streak}
                </small>
                {""} Days in a row
              </h5>

              <h6>
                Priority:{" "}
                {
                  <span
                    style={
                      str === "High"
                        ? { color: "red" }
                        : str === "Medium"
                        ? { color: "blue" }
                        : { color: "purple" }
                    }
                  >
                    {str}
                  </span>
                }
              </h6>
              <Row className="d-flex align-items-center justify-content-center">
                <Col className="col-1">
                  <h5 style={{ marginBottom: "0" }}>0</h5>
                </Col>
                <Col>
                  <ProgressBar
                    now={streak}
                    max={365}
                    variant="success"
                    style={{ backgroundColor: "lightblue" }}
                    animated
                  />
                </Col>
                <Col className="col-2">
                  {" "}
                  <h5 style={{ marginBottom: "0" }}>365</h5>
                </Col>
              </Row>
            </Col>
            <Col className="col-2">
              <div className="d-flex flex-column" style={{ width: "40px" }}>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 100 }}
                  overlay={renderTooltip("Delete")}
                >
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      handleDelete(habitItemIndex);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </OverlayTrigger>
                <Button
                  size="sm"
                  onClick={(e) => {
                    handleActiveStreak(e);
                  }}
                  variant={"success"}
                  value="inc"
                  className="bi bi-arrow-up"
                ></Button>
                <Button
                  onClick={(e) => {
                    handleActiveStreak(e);
                  }}
                  variant={"warning"}
                  value="dec"
                  className="bi bi-arrow-down"
                ></Button>
                <Button
                  size="sm"
                  onClick={(e) => {
                    handleActiveStreak(e);
                  }}
                  value="reset"
                  className="bi bi-bootstrap-reboot"
                ></Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Habit;
