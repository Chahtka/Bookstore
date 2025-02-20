import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="course" element={<Courses />} />
          <Route path="singup" element={<Singup />} />
        </Routes>
    </>
  );
}

export default App;
