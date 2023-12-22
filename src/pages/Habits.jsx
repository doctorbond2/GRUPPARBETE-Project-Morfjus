import React, { useEffect, useState, useReducer } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Habit from "../components/habitsComp/Habit";
import HabitList from "../components/habitsComp/HabitList";

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
      <div>
        <div>{""}</div>
        <Container>
          <HabitList
            {...{
              navigate,
              dropDownSelectOptions,
              filterOptions,
              sortedHabits,
              setSortedHabits,
              habits,
              setHabits,
              handleFilterPriority,
              handleSortPriority,
            }}
          />
        </Container>
      </div>
    </>
  );
};

export default Habits;
