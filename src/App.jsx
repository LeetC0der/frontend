import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login/Login";
import Register from "./authentication/Register_folder/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
