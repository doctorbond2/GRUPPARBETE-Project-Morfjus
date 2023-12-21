import React, { useEffect, useState, useReducer } from "react";
import { ListGroup, Dropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Habit from "../components/habitsComp/Habit";

const Habits = ({ habits, setHabits }) => {
  const [sortedHabits, setSortedHabits] = useState(habits);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(habits);
  }, []);
  const filterOptions = [
    { value: "All", label: "All" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const dropDownSelectOptions = [
    { value: "High", label: "Highest Priority" },
    { value: "Low", label: "Lowest Priority" },
    { value: "highstreak", label: "Longest streak" },
    {
      value: "lowstreak",
      label: "Shortest streak",
    },
  ];

  const handleSortPriority = (prio) => {
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
      case "highstreak": {
        newSortedHabits.sort((x, y) => {
          return y.streak - x.streak;
        }, 0);
        setSortedHabits(newSortedHabits);
        break;
      }
      case "lowstreak": {
        newSortedHabits.sort((x, y) => {
          return x.streak - y.streak;
        }, 0);
        setSortedHabits(newSortedHabits);
        break;
      }
    }
  };
  const handleFilterPriority = (prio) => {
    const newFilteredHabits = [...habits];
    if (prio !== "All") {
      switch (prio) {
        case "High": {
          setSortedHabits(newFilteredHabits.filter((x) => x.prio.str === prio));
          break;
        }
        case "Medium": {
          setSortedHabits(newFilteredHabits.filter((x) => x.prio.str === prio));
          break;
        }
        case "Low": {
          setSortedHabits(newFilteredHabits.filter((x) => x.prio.str === prio));
        }
      }
    } else {
      setSortedHabits(newFilteredHabits);
    }
  };
  return (
    <>
      <div className="habits-asdasd">ASDASDDSADS</div>
      <div>
        <Button
          onClick={() => {
            navigate("/newHabit");
          }}
        >
          Add new habit
        </Button>
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
      </div>
    </>
  );
};

export default Habits;
