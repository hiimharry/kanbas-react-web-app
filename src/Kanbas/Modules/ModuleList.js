import db from "../Database";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faCaretDown, faCheckCircle, faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
        {modules.map((module, index) => (
          <ul className="list-group bold-text my-5">
          <li key={index} className="list-group-item list-group-item-secondary p-3 rounded-0">
            <div><FontAwesomeIcon icon={faGripVertical}/><button type="button" className="bg-transparent border-0"><FontAwesomeIcon icon={faCaretDown}/></button>
            {module.name}
            <div className="float-end"><button type="button" className="bg-transparent border-0"><FontAwesomeIcon icon={faCheckCircle} style={{"color": "#00ad34"}}/>
            <FontAwesomeIcon icon={faCaretDown}/></button><button type="button" class="bg-transparent border-0"><FontAwesomeIcon icon={faPlus}/></button><button type="button" class="bg-transparent border-0">
              <FontAwesomeIcon icon={faEllipsisV}/></button></div></div></li>
                {module.lessons ? module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item p-3 rounded-0">
                    <div><FontAwesomeIcon icon={faGripVertical} className="me-2"/>{lesson.name} <div class="float-end"><button type="button" class="bg-transparent border-0"><FontAwesomeIcon icon={faCheckCircle} style={{"color": "#00ad34"}}/></button><button type="button" class="bg-transparent border-0"><FontAwesomeIcon icon={faEllipsisV}/></button></div></div>
                  </li>
                )) : ""}
              </ul>
        ))}
    </div>
  );
}

export default ModuleList;
