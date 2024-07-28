import React, { useEffect, useState } from "react";
import "./prj.scss";
import { useSelector } from "react-redux";
import { useGetNewToken } from "../../getNewAccessToken";
import fetchUserProjects, { addProjects } from "./ProjectApis";
import { getTaks } from "../Notes";
import AddProject from "./addPrj/AddProject";
import ShowProject from "./show_projects/ShowProject";

export default function Project() {
  const getNewToken = useGetNewToken();
  const accessToken = useSelector((state) => state.accessToken);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!accessToken) {
        await getNewToken();
      }
      if (accessToken) {
        const projects = await fetchUserProjects(accessToken);
        sessionStorage.setItem(
          "userProjects",
          JSON.stringify(projects.data.project_list)
        );
        const tasks = await getTaks(accessToken);
        console.log(projects, tasks);
      }
    };
    fetchProjects();
  }, [accessToken, getNewToken]);

  return (
    <div className="prj centered">
      <h1 className="head">Workspace</h1>
      <AddProject accessToken={accessToken} />
      <ShowProject />
    </div>
  );
}
