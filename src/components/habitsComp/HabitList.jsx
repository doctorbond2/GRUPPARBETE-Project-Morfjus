import React from "react";
import Habit from "./Habit";
import { ListGroup, Dropdown, Button } from "react-bootstrap";
const HabitList = ({
  dropDownSelectOptions,
  filterOptions,
  sortedHabits,
  setSortedHabits,
  habits,
  setHabits,
  handleFilterPriority,
  handleSortPriority,
}) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
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
      </div>

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
                    setHabits,
                  }}
                />
              </ListGroup.Item>
            </>
          ))}
      </ListGroup>
    </>
  );
};

export default HabitList;
