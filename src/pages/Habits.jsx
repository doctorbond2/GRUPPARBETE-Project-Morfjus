import React, { useEffect, useState, useReducer } from "react";
import { Button, Container, Row, Dropdown, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Habit from "../components/habitsComp/Habit";
import HabitList from "../components/habitsComp/HabitList";
import HabitsFilters from "../components/habitsComp/HabitsFilters";
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
const Habits = ({ habits, setHabits }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sortedHabits, setSortedHabits] = useState(habits);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(habits);
  }, []);

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
        <Container>
          <Row className="justify-content-end">
            <Col md="auto">
              <Button
                onClick={() => {
                  navigate("/newHabit");
                }}
              >
                Add new habit
              </Button>
            </Col>
            <Col md="auto">
              <Button variant="primary" onClick={handleShow}>
                Filter results <i className="bi bi-filter-right"></i>
              </Button>
            </Col>
          </Row>
          <HabitsFilters
            {...{
              handleClose,
              handleShow,
              show,
              setShow,
              handleFilterPriority,
              handleSortPriority,
              filterOptions,
              dropDownSelectOptions,
            }}
          />

          <Row>
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Habits;
