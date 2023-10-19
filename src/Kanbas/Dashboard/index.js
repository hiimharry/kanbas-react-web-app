import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEdit } from '@fortawesome/free-solid-svg-icons'
function Dashboard() {
  const courses = db.courses;
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
              <FontAwesomeIcon icon={faEdit}/>
              <button type="button" class="course-header-button" style={{"background": "transparent", "color":"white"}}>
                <FontAwesomeIcon icon={faEllipsisV} style={{"background":"transparent"}}/>
              </button>
            </div>
            </div>
          ))}
          </div>
        </div>
    </div>);
  }
  
  export default Dashboard;
  