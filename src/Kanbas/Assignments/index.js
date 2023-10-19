import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlus, faCircleCheck, faEdit, faGripVertical} from '@fortawesome/free-solid-svg-icons'

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
  <div className="col-10 flex-fill">
    <div class="module-header d-flex justify-content-end py-3">
      <input className="form-control w-25 me-auto" type="text" placeholder="Search for Assignment" aria-label="default input example"/>
      <button type="button" class="btn btn-border btn-light mx-1"><FontAwesomeIcon icon={faPlus}/> Group</button>
      <button type="button" class="btn btn-border btn-danger mx-1"><FontAwesomeIcon icon={faPlus}/> Assignment</button>
      <button type="button" class="btn btn-border mx-1 btn-light"><FontAwesomeIcon icon={faEllipsisV}/></button>
    </div>
      <div className="list-group my-5">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item p-3 rounded-0 d-flex"
          >
                  <div class="my-auto">
                    <FontAwesomeIcon icon={faGripVertical} style={{"width":"10px"}}class="me-4 default-color"/> <FontAwesomeIcon className="me-4" icon={faEdit} style={{"color": "#019812"}}/>
                  </div>
                    <div class="row">
                        <div class="col-12 bold-text default-color">{assignment.title}</div>
                        <div class="col-12 subtext">Placeholder 1</div>
                        <div class="col-12 subtext"><span class="bold-text">DUE</span> Sep 18, 2023 at 11:59 pm | 100 pts</div>
                     </div>
                    <div class="ms-auto my-auto">
                        <button type="button" class="bg-transparent border-0"><FontAwesomeIcon icon={faCircleCheck} style={{"color": "#00ad34"}}/></button><button type="button" class="bg-transparent border-0"><FontAwesomeIcon icon={faEllipsisV}/></button>
                    </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
