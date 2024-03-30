import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import List from "./Components/List";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
} 