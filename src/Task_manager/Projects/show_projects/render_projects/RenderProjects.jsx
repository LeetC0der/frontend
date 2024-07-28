import React, { useEffect, useState } from "react";
import "./renderproject.scss";

const renderProjects = (data) => {
  return (
    <div>
      {data.map((itm, idx) => (
        <div key={idx}>
          <h1>{itm.title}</h1>
          <span>Created: {itm.created_at}</span>
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
