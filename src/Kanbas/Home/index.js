import Modules from "../Modules";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-10">
          <Modules />
        </div>
      <div class="col-2 mt-2 flex-fill d-none d-xxl-block">
                <div>Course Status</div>
                <button type="button" class="btn btn-border btn-light" style={{"width":"112.5px"}}>Unpublish</button><button type="button" class="btn btn-border btn-success" style={{"width":"112.5px"}}>Published</button>
                  <button type="button" class="btn btn-border btn-light" style={{"width":"225px"}}>Import Existing Content</button>
                  <button type="button" class="btn btn-border btn-light" style={{"width":"225px"}}>Import From Commons</button>
                  <button type="button" class="btn btn-border btn-light" style={{"width":"225px"}}>Choose Home Page</button>
                  <button type="button" class="btn btn-border btn-light" style={{"width":"225px"}}>View Course Stream</button>
                  <button type="button" class="btn btn-border btn-light" style={{"width":"225px"}}>New Announcements</button>
                  <button type="button" class="btn btn-border btn-light" style={{"width":"225px"}}>New Analytics</button>
                  <button type="button" class="btn btn-border btn-light" style={{"width":"225px"}}>View Course Notifications</button>
                <div class="bold-text border-bottom py-2" style={{"width":"300px"}}>Coming Up <a href="#" class="ps-5"><FontAwesomeIcon icon={faCalendar}/> View Calendar</a></div>
                <div><FontAwesomeIcon icon={faCalendar}/> <a href="#">Lecture 1</a></div>
                <div><FontAwesomeIcon icon={faCalendar}/> <a href="#">Lecture 2</a></div>
                <div><FontAwesomeIcon icon={faCalendar}/> <a href="#">Lecture 3</a></div>
        </div>
    </div>
  );
}

export default Home;
