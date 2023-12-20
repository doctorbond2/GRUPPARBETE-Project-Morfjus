import React, { useEffect, useState, useReducer } from "react";
import { ListGroup, Dropdown } from "react-bootstrap";
import Habit from "../components/habitsComp/Habit";

const Habits = ({ habits, setHabits }) => {
  const [sortedHabits, setSortedHabits] = useState(habits);

  useEffect(() => {
    console.log(habits);
    setSortedHabits(habits);
  }, []);
  const dropDownSelectOptions = [
    { value: "High", label: "Highest Priority" },
    { value: "Low", label: "Lowest Priority" },
    { value: "highstreak", label: "Longest streak" },
    {
      value: "lowstreak",
      label: "Shortest streak",
    },
  ];

  const handleSelectPriority = (prio) => {
    let newSortedHabits = [...habits];
    switch (prio) {
      case "High": {
        newSortedHabits.sort((x, y) => {
          return y.prio.tier - x.prio.tier;
        }, 0);
        setSortedHabits(newSortedHabits);
        break;
      }
      case "Low": {
        newSortedHabits.sort((x, y) => {
          return x.prio.tier - y.prio.tier;
        }, 0);
        setSortedHabits(newSortedHabits);
        break;
      }
    }
  };
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
            Priority
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {dropDownSelectOptions.map((x, i) => (
              <Dropdown.Item
                onClick={() => {
                  handleSelectPriority(x.value);
                }}
                value={x.value}
              >
                {x.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <ListGroup>
          {habits &&
            sortedHabits.map((habitItem, habitItemIndex) => (
              <>
                <ListGroup.Item>
                  <Habit
                    {...{
                      habitItem,
                      sortedHabits,
                      setSortedHabits,
                      habitItemIndex,
                    }}
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
