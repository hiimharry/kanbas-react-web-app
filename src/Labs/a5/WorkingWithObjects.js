import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [title, setTitle] = useState(assignment.title);
  const URL = "http://localhost:4000/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <div>{JSON.stringify(assignment)}</div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="form-control mb-2 w-75"
        type="text" />
      <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {title}
      </button>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
    </div>
  );
}
export default WorkingWithObjects;