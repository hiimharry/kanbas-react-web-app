import { useLocation, useParams } from "react-router";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import { Routes, Route, Link } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grades from "../Grades";


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const section = useLocation()["pathname"].split("/").splice(4);
  console.log(section);
  return (
    <div>
      <div className="row profile-header">
        <div class="col-12 d-none d-xl-block profile-header-2 ps-0 pb-2">
                        <div class="d-flex flex-row">
                        <div class="borgar me-3">
                            <FontAwesomeIcon icon={faBars} className="fa-icon fa-lg"/>
                        </div>
                        <div class="header-text" style={{"padding-top": "2px"}}>
                          <nav className="breadcrumb-divide" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                              <li class="breadcrumb-item"><Link to={`/Kanbas/Courses/${course._id}`}>{course.number}</Link></li>
                              {section.map((sec, index) =>
                              <li className={`breadcrumb-item ${section.length - 1 == index && "active"}`} aria-current="page">
                                {section.length - 1 != index ? <Link key={index}
                                to={`/Kanbas/Courses/${course._id}/${sec}`}>{sec.replace("%20", " ")}</Link> : sec.replace("%20", " ")}
                              </li>)}
                            </ol>
                          </nav>
                      </div>
                    </div>
            </div>
      </div>
      <div class="row"> 
          <CourseNavigation />
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
          </div>
    </div>
  </div>
  );
}

export default Courses;
