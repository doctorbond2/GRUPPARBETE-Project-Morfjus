import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Friends from "./pages/Friends";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import NewHabit from "./pages/NewHabit";
import NavbarLayout from "./pages/NavbarLayout";

function App() {
  const dummyTasks = [
    { id: 1, title: "Do dishes", completed: false },
    { id: 2, title: "Feed fish", completed: true },
    { id: 3, title: "Walk cat", completed: false },
  ];
  const [tasks, setTasks] = useState(dummyTasks);
  const [friends, setFriends] = useState([]);
  const [habits, setHabits] = useState([]);

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
