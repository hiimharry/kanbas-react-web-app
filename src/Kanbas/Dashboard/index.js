import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEdit } from '@fortawesome/free-solid-svg-icons'
import { React, useState } from "react";
function Dashboard(  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse } ) {
 
  return (
    <div>
      <div class="profile-header profile-header-2">
        <div class="dashboard-title">
          Dashboard
        </div>
      </div>
      <div class="m-3 profile-header profile-header-2">
        <div class="bold-text dashboard-published">
          Published Courses(3)
        </div>
        <h5>Course</h5>
        <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

        <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>

      </div>
      <div class="mt-4 m-3">
        <div class="d-flex flex-row flex-wrap">
          {courses.map((course, index) => (
            <div class="card course">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
            <div className={`card-img-top course-card-header-${index%3 + 1}`}>
              </div>
            </Link>
            <div class="card-body">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
                <h5 class="card-title">{course.name}</h5>
                <div class="card-text">{course.number}</div>
                <div class="card-subtext">Fall 2023 Semester Full Term</div>
              </Link>
              <button class="border-0 bg-transparent" onClick={(event) => {
                event.preventDefault();
                setCourse(course);}}>
                <FontAwesomeIcon icon={faEdit}/>
              </button>
              <button type="button" class="course-header-button" style={{"background": "transparent", "color":"white"}}>
                <FontAwesomeIcon icon={faEllipsisV} style={{"background":"transparent"}}/>
              </button>
              <button class="float-end bg-transparent"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

            </div>
            </div>
          ))}
          </div>
        </div>
    </div>);
  }
  
  export default Dashboard;
  