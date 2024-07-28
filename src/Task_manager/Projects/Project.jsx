import React, { useEffect } from "react";
import "./prj.scss";
import { useSelector } from "react-redux";
import { useGetNewToken } from "../../getNewAccessToken";
import fetchUserProjects from "./ProjectApis";
import { getTaks } from "../Notes";

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
        const tasks = await getTaks(accessToken);
        console.log(projects, tasks);
      }
    };
    fetchProjects();
  }, [accessToken, getNewToken]);

  return <div className="prj">Project</div>;
}
