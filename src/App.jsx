import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import {
  Friends,
  Tasks,
  NewTask,
  Home,
  Habits,
  NewHabit,
  NavbarLayout,
} from "./pages";
import initialTasks from "./mockData/initialTasks";
import initialFriends from "./mockData/initialFriends";

const defaultHabits = [
  { title: "Learning guitar", streak: 2, prio: { str: "Low", tier: 1 } },
  { title: "Reading a book", streak: 7, prio: { str: "High", tier: 3 } },
  {
    title: "Daily meditation",
    streak: 12,
    prio: { str: "High", tier: 3 },
  },
  {
    title: "Morning jogging",
    streak: 3,
    prio: { str: "Medium", tier: 2 },
  },
  {
    title: "Cook a new recipe",
    streak: 1,
    prio: { str: "Low", tier: 1 },
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [habits, setHabits] = useState(defaultHabits);
  const [friends, setFriends] = useState(initialFriends);
  return (
    <>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route
            path="/"
            element={
              <Home
                {...{ tasks, setTasks, friends, setFriends, habits, setHabits }}
              />
            }
          />
          <Route path="/tasks" element={<Tasks {...{ tasks, setTasks }} />} />
          <Route
            path="/newTask"
            element={<NewTask {...{ tasks, setTasks }} />}
          />
          <Route
            path="/habits"
            element={<Habits {...{ habits, setHabits }} />}
          />
          <Route
            path="/newHabit"
            element={<NewHabit {...{ habits, setHabits }} />}
          />
          <Route
            path="/friends"
            element={<Friends {...{ friends, setFriends }} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
