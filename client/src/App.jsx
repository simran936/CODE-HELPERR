import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./Pages/student/Home";
import CoursesList from "./Pages/student/CoursesList";
import CourseDetails from "./Pages/student/CourseDetails";
import Myenrollments from "./Pages/student/Myenrollments";
import Player from "./Pages/student/Player";
import Educator from "./Pages/educator/Educator";

import Loading from "./components/student/Loading";
import Dashboard from "./Pages/educator/Dashboard";
import Addcourse from "./Pages/educator/Addcourse";
import Mycourses from "./Pages/educator/Mycourses";
import StudentsEnrolled from "./Pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";
import "quill/dist/quill.snow.css"

const App = () => {
  const isEducatorRoute=useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute &&     <Navbar/> }
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<Myenrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="/educator" element={<Dashboard />} />
          <Route path="add-course" element={<Addcourse />} />
          <Route path="my-courses" element={<Mycourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
