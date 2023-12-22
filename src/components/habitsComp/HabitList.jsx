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
  navigate,
}) => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
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
          {habits &&
            sortedHabits.map((habitItem, habitItemIndex) => (
              <>
                <ListGroup.Item style={{ border: "none" }}>
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
      </div>
    </>
  );
};

export default HabitList;
