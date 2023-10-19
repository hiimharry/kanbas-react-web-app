import db from "../Database";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport, faFileExport, faCog } from '@fortawesome/free-solid-svg-icons'
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  
  return (
    <div className="col-10">
      <div class="d-flex justify-content-end py-3">

        <button type="button" class="btn btn-border btn-light mx-1"><FontAwesomeIcon icon={faFileImport}/> Import</button>

        <button type="button" class="btn btn-border btn-light mx-1"><FontAwesomeIcon icon={faFileExport}/> Export</button>

        <button type="button" class="btn btn-border mx-1 btn-light"><FontAwesomeIcon icon={faCog}/></button>
    </div>
    <div class="row">
    <div class="col bold-text">
        Student Names
    </div>
    <div class="col bold-text">
        Assignment Names
    </div>
    </div>
    <div class="row">
    <div class="col">
        <input class="form-control w-100 me-auto" type="text" placeholder="Search Students"/>
    </div>
    <div class="col">
        <input class="form-control w-100 me-auto" type="text" placeholder="Search Assignments"/>
    </div>
    </div>
    <div class="my-3">
    <button type="button" class="btn btn-border btn-light mx-1"><i class="fas fa-filter"></i> Apply Filters</button>
    </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="align-middle text-center">
            <tr>
                <th>Student Name</th>
                {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </tr>
          </thead>
          <tbody className="text-center">
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;