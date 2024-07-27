import React, { useState } from "react";
import "./home.scss";
import blackLogo from "../assets/blacklogo.png";
import { LogOut } from "lucide-react";
import HomeOptions from "./HomeOptions";
import TaskManager from "../Task_manager/TaskManager";
import Setting from "../settings/Setting";
export default function HomePage() {
  const [option, setoption] = useState(null);
  const findSelectedoption = (data) => {
    setoption(data);
    console.log(data);
    return;
  };
  return (
    <div className="home centered">
      <div className="nav flex-col">
        <img className="img" src={blackLogo} alt="" />
        <HomeOptions selectedOption={findSelectedoption} />
        <LogOut className="logout" />
      </div>
      <div className="render-template">
        {option && option === "task" ? <TaskManager /> : <></>}
        {option && option === "settings" ? <Setting /> : <></>}
      </div>
    </div>
  );
}
