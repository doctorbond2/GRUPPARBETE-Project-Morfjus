import React from "react";
import Habit from "./Habit";
import {
  ListGroup,
  Dropdown,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
const HabitList = ({
  dropDownSelectOptions,
  filterOptions,
  sortedHabits,
  setSortedHabits,
  habits,
  setHabits,
  handleFilterPriority,
  handleSortPriority,
  navigate,
}) => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            marginLeft: "3%",
          }}
        >
          <Dropdown>
            <Dropdown.Toggle
              variant="tertiary"
              id="dropdown-basic"
              style={{
                border: "1px solid black",
              }}
            >
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropDownSelectOptions.map((x, i) => (
                <Dropdown.Item
                  onClick={() => {
                    handleSortPriority(x.value);
                  }}
                  value={x.value}
                >
                  {x.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              variant="tertiary"
              style={{ border: "1px solid black" }}
            >
              Filter{" "}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {filterOptions.map((x, i) => (
                <Dropdown.Item
                  onClick={() => {
                    handleFilterPriority(x.value);
                  }}
                  value={x.value}
                >
                  {x.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            style={{ minWidth: "200px" }}
            onClick={() => {
              navigate("/newHabit");
            }}
          >
            Add new habit
          </Button>
        </div>

        <ListGroup>
          <Container>
            <Row>
              {habits &&
                sortedHabits.map((habitItem, habitItemIndex) => (
                  <>
                    <Col className="col-6">
                      <ListGroup.Item
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Habit
                          {...{
                            habitItem,
                            sortedHabits,
                            setSortedHabits,
                            habitItemIndex,
                            setHabits,
                          }}
                        />
                      </ListGroup.Item>
                    </Col>
                  </>
                ))}
            </Row>
          </Container>
        </ListGroup>
      </div>
    </>
  );
};

export default HabitList;
