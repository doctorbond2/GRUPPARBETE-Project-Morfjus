import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Friends from "./pages/Friends";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import NewHabit from "./pages/NewHabit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Placeholder for header/navbar</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/newTask" element={<NewTask />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/newHabit" element={<NewHabit />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </>
  );
}

export default App;
