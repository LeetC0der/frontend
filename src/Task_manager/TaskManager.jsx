import React from "react";
import "./Tm.scss";
import Project from "./Projects/Project";
export default function TaskManager() {
  return (
    <div className="tms">
      <div className="radius-and-bg project">
        <Project />
      </div>
      <div className="radius-and-bg tasks"></div>
    </div>
  );
}
