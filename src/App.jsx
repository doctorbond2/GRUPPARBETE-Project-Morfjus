import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Placeholder for header/navbar</div>
      <Routes></Routes>
    </>
  );
}

export default App;
