import React from "react";
import { useState } from "react";
import HabitInput from "../components/habitsComp/HabitInput";
const NewHabit = ({ habits, setHabits }) => {
  const [newHabit, setNewHabit] = useState();
  const handleSubmit = () => {
    if (newHabit) {
      const {
        title,
        streak,
        prio: { tier, str },
      } = newHabit;
      if (title && streak && tier && str) {
        setHabits((prev) => [...prev, newHabit]);
        console.log(habits);
      } else {
        alert("no habit 2");
      }
    } else {
      alert("No habit 1");
    }
  };
  const handleChange = (e, targetProperty) => {
    const { value } = e.target;
    if (targetProperty === "prio" && value !== "") {
      switch (value) {
        case "High": {
          const updatedHabit = { ...newHabit, prio: { str: value, tier: 1 } };
          setNewHabit(updatedHabit);
          break;
        }
        case "Medium": {
          const updatedHabit = { ...newHabit, prio: { str: value, tier: 2 } };
          setNewHabit(updatedHabit);
          break;
        }
        case "Low": {
          const updatedHabit = { ...newHabit, prio: { str: value, tier: 3 } };
          setNewHabit(updatedHabit);
          break;
        }
      }
      console.log(newHabit);
    } else if (value !== "") {
      const updatedHabit =
        targetProperty === "streak"
          ? { ...newHabit, [targetProperty]: Number(value) }
          : { ...newHabit, [targetProperty]: value };
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
