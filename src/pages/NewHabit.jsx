import React from "react";
import { useState } from "react";
import HabitInput from "../components/habitsComp/HabitInput";
const NewHabit = ({ habits, setHabits }) => {
  const [newHabit, setNewHabit] = useState();
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  const handleChange = (e, targetProperty) => {
    const { value } = e.target;
    if (targetProperty === "prio" && value !== "") {
      switch (value) {
        case "High": {
          const updatedHabit = { ...newHabit, prio: { str: value, tier: 1 } };
          break;
        }
        case "Medium": {
          const updatedHabit = { ...newHabit, prio: { str: value, tier: 2 } };
          break;
        }
        case "Low": {
          const updatedHabit = { ...newHabit, prio: { str: value, tier: 3 } };
          break;
        }
      }
    } else if (value !== "") {
      const updatedHabit = { ...newHabit, [targetProperty]: value };
      setNewHabit(updatedHabit);
      console.log(newHabit);
    }
  };
  return (
    <>
      <HabitInput {...{ habits, setHabits, handleChange, handleSubmit }} />
    </>
  );
};

export default NewHabit;
