import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlus, faCircleCheck} from '@fortawesome/free-solid-svg-icons'

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
      <div class="col-10">
    <div class="module-header d-flex justify-content-end py-3">

    <span class="bold-text my-auto me-2" style={{"color": "#00ad34"}}><FontAwesomeIcon icon={faCircleCheck}/> Published </span>
      
      <button type="button" class="btn btn-border mx-1 btn-light"><FontAwesomeIcon icon={faEllipsisV}/></button>
    </div>

<div class="my-2">
    <div>Assignment Name</div>
    <div><input class="form-control my-2" type="text" value={assignment.title}/></div>
    <div><textarea class="form-control my-2" id="assignment-desc" rows="5" value={`${assignment.title} Description`}/></div>
    <div class="container">
    <div class="d-flex flex-row"><div class="my-auto col-2 text-end me-2">Points</div> <div class="w-50 col-9"><input class="form-control my-2" type="text" value="100"/></div></div>
    <div class="d-flex flex-row"><div class="my-auto col-2 text-end me-2">Assignment Group</div> <div class="w-50">
        <select class="form-select w-100 my-2" id="select-one-assignment-group">
                <option selected value="assignments">Assignments</option>
                <option value="quizzes">
                    Quizzes</option>
                <option value="projects">Projects</option>
             </select></div></div>
    <div class="d-flex flex-row "><div class="my-auto col-2 text-end me-2">Display Grade as</div> <div class="w-50">
        <select class="form-select w-100 my-2" id="select-one-grade-as">
                <option selected value="percentage">Percentage</option>
                <option value="points">Points</option>
             </select></div></div>

    <div class="d-flex flex-row my-4">
        <div class="col-2 me-2"></div>
        <div class="col-9"><input type="checkbox" value="count-towards-grade"
            name="count" id="chkbox-count-grade"/> <label for="chkbox-count-grade"> Do not count this assignment towards the final grade </label></div>
    </div>

    <div class="d-flex flex-row">
        <div class="col-2 text-end me-2">Submission Type</div>
        <div class="w-50 col-9 border p-2">
            <div><select class="form-select my-2 w-50" id="select-one-submission-type">
                <option selected value="online">Online</option>
                <option value="in-person">
                    In-person</option>
                </select>
            </div>
            <div class="bold-text my-4">Online Entry Options</div>
            <div>
                <div class="my-4">
                    <input type="checkbox" value="Text Entry"
                    name="online-entry" id="chkbox-text"/>
                    <label for="chkbox-text">Text Entry</label>
                </div>
                <div class="my-4">
                    <input type="checkbox" value="Website URL"
                    name="online-entry" id="chkbox-website"/>
                    <label for="chkbox-website">Website URL</label>
                </div>   
                <div class="my-4">
                    <input type="checkbox" value="Media Recordings"
                    name="online-entry" id="chkbox-media"/>
                    <label for="chkbox-media">Media Recordings</label>
                </div>
                <div class="my-4">
                    <input type="checkbox" value="Student Annotations"
                    name="online-entry" id="chkbox-annotations"/>
                    <label for="chkbox-annotations">Student Annotations</label>
                </div>
                <div class="my-4">
                    <input type="checkbox" value="File Uploads"
                    name="online-entry" id="chkbox-file"/>
                    <label for="chkbox-file">File Uploads</label>
                </div>
            </div>
    </div>
    
</div>

<div class="d-flex flex-row mt-5">
    <div class="col-2 text-end me-2">Assign</div>
    <ul class="list-group w-50 col-9">
    <div class="border p-2 list-group-item">
        <div class="bold-text">Assign-to</div>
        <div><input class="form-control my-2" type="text" value="Everyone"/></div>
        <div class="bold-text mt-3">Due</div>
        <div><input type="date" class="form-control" id="text-fields-due"
        value="2023-01-01"/></div>

        <div class="row mt-3">
            <div class="col bold-text">Available From</div>
            <div class="col bold-text">Until</div>
        </div>

        <div class="row mb-5">
            <div class="col">
                <input type="date" class="form-control" id="text-fields-available-from"
        value="2023-01-01"/>
            </div>
            <div class="col">
                <input type="date" class="form-control" id="text-fields-available-until"/>
            </div>
        </div>
    </div>
    <button class="list-group-item list-group-item-secondary">
        <FontAwesomeIcon icon={faPlus}/> Add
    </button>
    </ul>
</div>


<div class="profile-footer mb-5 pt-4">
    <div class="float-start">
        <input type="checkbox" value="assignment-change-notif"
                    name="assignment-change-notif" id="chkbox-assignment-change-notif"/>
                    <label for="chkbox-assignment-change-notif">Notify users that this content has changed</label>
    </div>
    <div class="float-end">
    <form action="index.html">
        <Link class="btn btn-light btn-border" to={`/Kanbas/Courses/${courseId}/Assignments`}>Cancel</Link>
        <button class="btn btn-danger btn-border" onClick={handleSave}>Save</button>
    </form>
    </div>
</div>
</div>

</div>
</div>
  );
}

export default AssignmentEditor;
