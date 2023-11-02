import ModuleList from "./ModuleList";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlus, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
function Modules() {
  return (
    <div>
      <div class="module-header d-flex justify-content-end py-3">
                <button type="button" class="btn btn-border btn-light mx-1">Collapse All</button>

                <button type="button" class="btn btn-border btn-light mx-1">View Progress</button>
                <div class="dropdown">
                  <button class="btn btn-border btn-light dropdown-toggle mx-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#00a814",}} /> Publish All
                  </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Publish All</a></li>
                  <li><a class="dropdown-item" href="#">Unpublish All</a></li>
                </ul>
                </div>
                <button type="button" class="btn btn-border btn-danger mx-1"><FontAwesomeIcon icon={faPlus} style={{"background":"transparent"}}/> Module</button>
                
                <button type="button" class="btn btn-border mx-1 btn-light"><FontAwesomeIcon icon={faEllipsisV}/></button>
        </div>
      <ModuleList />
    </div>
  );
}

export default Modules;
