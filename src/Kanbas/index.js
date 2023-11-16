import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Grades from "./Grades";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./style.css";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="container-fluid" id="bootstrap-override">
    <div className="row">
      <KanbasNavigation />
      <div class="col-sm-12 col-md-12 col-lg-11 col-xl-11">
        <Routes>
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
