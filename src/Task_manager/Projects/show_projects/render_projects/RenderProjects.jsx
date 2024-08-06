import React, { useEffect, useState } from "react";
import "./renderproject.scss";

const renderDateandtime = (data) => {
  const array = data.split(" ");
  return (
    <div className="holder">
      <span className="date">{array.slice(0, 3)}</span>
      <span>{array[4]}</span>
    </div>
  );
};

const renderProjects = (data) => {
  return (
    <div>
      {data.map((itm, idx) => (
        <div className="each-project" key={idx}>
          <div className="header">
            <h1 className="title">{itm.title}</h1>
            {renderDateandtime(itm.created_at)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function RenderProjects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Correct method for accessing session storage
      const userProjects = sessionStorage.getItem("userProjects");
      let projects = userProjects ? JSON.parse(userProjects) : [];
      setProject(projects);
    }, 3000);
  }, []); // Empty dependency array means this runs once on mount

  return <div className="rp-root">{renderProjects(project)}</div>;
}
