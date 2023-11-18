import React, { useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faCaretDown, faXmarkCircle, faEllipsisV, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule, clientDeleteModule, clientUpdateModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const m = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, m).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
      clientDeleteModule(moduleId).then((status) => {
        dispatch(deleteModule(moduleId));
      });
    };
  
    const handleUpdateModule = async () => {
      const status = await clientUpdateModule(m);
      dispatch(updateModule(m));
    };
  
  return (
    <div>
              <div className="d-flex">
                <input value={m.name} className="my-auto mx-2 w-25"
                onChange={(e) => dispatch(setModule({ ...m, name: e.target.value }))}
                            />
                            <textarea value={m.description} className="my-auto mx-2 w-25 h-50"
                onChange={(e) => dispatch(setModule({ ...m, description: e.target.value }))}
                            />

                        <button onClick={() => handleAddModule()} className="my-auto mx-2">
                           Add
                        </button>

                        <button onClick={() => handleUpdateModule()} className="my-auto mx-2">
                          Update
                        </button>

              </div>
        {modules.filter((module) => module.course === courseId).map((module, index) => (
          <ul className="list-group fw-bold my-5">
          <li key={index} className="list-group-item list-group-item-secondary p-3 rounded-0">
            <div><FontAwesomeIcon icon={faGripVertical}/><button type="button" className="bg-transparent border-0"><FontAwesomeIcon icon={faCaretDown}/></button>
            {module.name}
            <div className="float-end"><button type="button" onClick={() => handleDeleteModule(module._id)} className="bg-transparent border-0"><FontAwesomeIcon icon={faXmarkCircle} style={{"color": "red"}}/>
           </button><button type="button" class="bg-transparent border-0" onClick={() => dispatch(setModule(module))}><FontAwesomeIcon icon={faEdit}/></button><button type="button" class="bg-transparent border-0">
              <FontAwesomeIcon icon={faEllipsisV}/></button></div></div><div className="fw-normal fst-italic">{module.description}</div></li>
                {module.lessons ? module.lessons.map((lesson, index) => (
                  <li className="list-group-item p-3 rounded-0">
                    <div><FontAwesomeIcon icon={faGripVertical} className="me-2"/>{lesson.name} <div class="float-end"><button type="button" class="bg-transparent border-0"><FontAwesomeIcon icon={faXmarkCircle} style={{"color": "red"}}/></button><button type="button" class="bg-transparent border-0"><FontAwesomeIcon icon={faEdit}/></button></div></div>
                  </li>
                )) : ""}
              </ul>
        ))}
    </div>
  );
}

export default ModuleList;
