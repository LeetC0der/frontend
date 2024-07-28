import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import RenderProjects from "./render_projects/RenderProjects";
import "./showproject.scss";
export default function ShowProject() {
  const [projectName, setProjectName] = useState(null);
  const fetchProject = async (event) => {
    setProjectName(event.target.value);
  };
  useEffect(() => {
    console.log(projectName);
  }, [projectName]);
  return (
    <>
      <div className="sp">
        <span className="sp-chld">
          {projectName === null || projectName === "" ? (
            <Search className="sp-search" />
          ) : (
            <></>
          )}
          <input
            type="text"
            onChange={fetchProject}
            className="sp-int"
            placeholder="Project name"
          />
        </span>
      </div>
      <RenderProjects />
    </>
  );
}
