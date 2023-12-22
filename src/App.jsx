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
import initialHabits from "./mockData/initialHabits";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [habits, setHabits] = useState(initialHabits);
  const [friends, setFriends] = useState(initialFriends);
  return (
    <>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route
            path="/"
            element={
              <Home
                {...{
                  tasks,
                  setTasks,
                  friends,
                  setFriends,
                  habits,
                  setHabits,
                }}
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
