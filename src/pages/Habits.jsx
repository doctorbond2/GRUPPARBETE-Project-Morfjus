import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Habit from "../components/habitsComp/Habit";

const Habits = ({ habits, setHabits }) => {
  useEffect(() => {
    console.log(habits);
  }, []);
  return (
    <>
      <div>
        <ListGroup>
          {habits &&
            habits.map((habitItem, habitItemIndex) => (
              <>
                <ListGroup.Item>
                  <Habit {...{ habitItem }} />
                </ListGroup.Item>
              </>
            ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Habits;
