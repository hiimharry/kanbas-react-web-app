import KanbasNavigation from "./KanbasNavigation";
import Signin from "./users/signin";
import Signup from "./users/signup";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./users/account";
import UserTable from "./users/table";
import axios from "axios";
import "./style.css";



function Kanbas() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const [courses, setCourses] = useState([]);
  const URL = `${API_BASE}/courses`;
  
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "", number:""  });
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "", number:"" });
  };

  return (
    <Provider store={store}>
    <div className="container-fluid" id="bootstrap-override">
    <div className="row">
      <KanbasNavigation />
      <div class="col-sm-12 col-md-12 col-lg-11 col-xl-11">
        <Routes>
          <Route path="Account" element={<Account/>} />
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
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
