import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Grades from "./Grades";

function Kanbas() {
  return (
    <div className="container-fluid" id="bootstrap-override">
    <div className="row">
      <KanbasNavigation />
      <div class="col-sm-12 col-md-12 col-lg-11 col-xl-11">
        <Routes>
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}
export default Kanbas;
