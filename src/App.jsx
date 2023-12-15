import { useState } from "react";
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
  return (
    <>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/newTask" element={<NewTask />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/newHabit" element={<NewHabit />} />
          <Route path="/friends" element={<Friends />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
