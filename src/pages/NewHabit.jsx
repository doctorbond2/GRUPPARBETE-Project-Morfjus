import React from "react";
import { useState, useEffect } from "react";
import HabitInput from "../components/habitsComp/HabitInput";
const defaultH = {
  title: "",
  streak: 0,
  prio: { tier: 0, str: "" },
};
const NewHabit = ({ habits, setHabits }) => {
  const [newHabit, setNewHabit] = useState(defaultH);
  const [message, setMessage] = useState(null);
  const [activeTimeOut, setActiveTimeOut] = useState(false);
  useEffect(() => {
    if (!activeTimeOut) {
      setActiveTimeOut(true);
      setTimeout(() => {
        setMessage("");
        setActiveTimeOut(false);
      }, 2000);
    }
  }, [habits]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newHabit) {
      const {
        title,
        streak,
        prio: { tier, str },
      } = newHabit;
      if (title && streak && tier && str) {
        setHabits((prev) => [...prev, newHabit]);
        setNewHabit(defaultH);
        console.log(habits);
        e.target.reset();
        setMessage("Habit added!");
      } else {
        alert("Fill out the form!");
      }
    } else {
      alert("Fill out the form!");
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

      <h3 style={{ marginLeft: "7em", marginTop: "1em" }}>
        {message && message}
      </h3>
    </>
  );
};

export default NewHabit;
