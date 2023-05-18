import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateExam from "./components/CreateExam";
import AttendExam from "./components/AttendExam";
import Report from "./components/Report";
import Exam from "./components/Exam";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateExam />} />
      <Route path="/attend" element={<AttendExam />} />
      <Route path="/report" element={<Report />} />
      <Route path="/attend/:examName" element={<Exam />} />
    </Routes>
  );
}

export default App;
