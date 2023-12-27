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
        <ListGroup>
          <Container>
            <Row>
              {habits &&
                sortedHabits.map((habitItem, habitItemIndex) => (
                  <div key={habitItemIndex}>
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
                            habits,
                          }}
                        />
                      </ListGroup.Item>
                    </Col>
                  </div>
                ))}
            </Row>
          </Container>
        </ListGroup>
      </div>
    </>
  );
};

export default HabitList;
