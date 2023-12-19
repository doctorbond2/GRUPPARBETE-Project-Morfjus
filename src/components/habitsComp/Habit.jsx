import React from "react";
import { Card, Button } from "react-bootstrap";

const Habit = ({ habitItem, habits, setHabits, habitItemIndex }) => {
  const {
    streak,
    title,
    prio: { str, tier },
  } = habitItem;
  const handleActiveStreak = (e) => {
    let updatedHabits = "";
    switch (e.target.value) {
      case "inc": {
        updatedHabits = habits.map((x, i) => {
          if (habitItemIndex === i) {
            return { ...x, streak: x.streak + 1 };
          }
          return x;
        });
        setHabits(updatedHabits);
        console.log(habits);
        break;
      }
      case "dec": {
        if (streak !== 0) {
          updatedHabits = habits.map((x, i) => {
            if (habitItemIndex === i) {
              return { ...x, streak: x.streak - 1 };
            }
            return x;
          });
          setHabits(updatedHabits);
          console.log(habits);
        }
        break;
      }
      case "reset":
        {
          if (streak !== 0) {
            updatedHabits = habits.map((x, i) => {
              if (habitItemIndex === i) {
                return { ...x, streak: 0 };
              }
              return x;
            });
            setHabits(updatedHabits);
            console.log(habits);
          }
        }
        break;
    }
  };
  return (
    <>
      <Card>
        <Card.Header>
          <h2>{title}</h2>
        </Card.Header>
        <Card.Body>
          <h5>
            Activity Streak:{" "}
            <small className={streak > 5 ? "habits-activity-streak-color" : ""}>
              {streak}
            </small>
            {""} Days in a row
          </h5>
          <Button
            onClick={(e) => {
              handleActiveStreak(e);
            }}
            variant={"success"}
            value="inc"
          >
            +1
          </Button>
          <Button
            onClick={(e) => {
              handleActiveStreak(e);
            }}
            variant={"warning"}
            value="dec"
          >
            -1
          </Button>
          <Button
            onClick={(e) => {
              handleActiveStreak(e);
            }}
            value="reset"
          >
            Start over
          </Button>
          <h6>Priority: {str}</h6>
        </Card.Body>
      </Card>
    </>
  );
};

export default Habit;
