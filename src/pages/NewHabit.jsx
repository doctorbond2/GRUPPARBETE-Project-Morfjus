import React from "react";
import { useState } from "react";
import HabitInput from "../components/habitsComp/HabitInput";
const NewHabit = ({ habits, setHabits }) => {
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <HabitInput {...{ habits, setHabits, handleChange, handleSubmit }} />
    </>
  );
};

export default NewHabit;
