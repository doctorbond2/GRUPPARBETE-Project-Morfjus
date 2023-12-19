import React, { useEffect } from "react";
import { ListGroup, Dropdown } from "react-bootstrap";
import Habit from "../components/habitsComp/Habit";

const Habits = ({ habits, setHabits }) => {
  useEffect(() => {
    console.log(habits);
  }, []);
  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="tertiary"
            id="dropdown-basic"
            style={{
              border: "1px solid black",
              right: "0",
              marginLeft: "90vw",
            }}
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>High Priority</Dropdown.Item>
            <Dropdown.Item>Medium Priority</Dropdown.Item>
            <Dropdown.Item>Low Priority</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ListGroup>
          {habits &&
            habits.map((habitItem, habitItemIndex) => (
              <>
                <ListGroup.Item>
                  <Habit
                    {...{ habitItem, habits, setHabits, habitItemIndex }}
                  />
                </ListGroup.Item>
              </>
            ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Habits;
