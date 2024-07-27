import React, { useEffect, useState } from "react";
import "./home.scss";
import blackLogo from "../assets/blacklogo.png";
import { LogOut } from "lucide-react";
import HomeOptions from "./HomeOptions";
import TaskManager from "../Task_manager/TaskManager";
import Setting from "../settings/Setting";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
export default function HomePage() {
  const navigate = useNavigate();
  const [option, setoption] = useState(null);
  const [cookies, setcookies] = useCookies(["refresh_token"]);
  const accessToken = useSelector((state) => state.accessToken);
  const findSelectedoption = (data) => {
    setoption(data);
    return;
  };
  useEffect(() => {
    const cookieValue = cookies.refresh_token;
    console.log({ refresh_token: cookieValue, accessToken: accessToken });
  }, []);
  return (
    <div className="home centered">
      <div className="nav flex-col">
        <img className="img" src={blackLogo} alt="" />
        <HomeOptions selectedOption={findSelectedoption} />
        <span
          onClick={() => {
            navigate("/");
          }}
          className="logout"
        >
          <LogOut className="" />
        </span>
      </div>
      <div className="render-template">
        {option && option === "task" ? <TaskManager /> : <></>}
        {option && option === "settings" ? <Setting /> : <></>}
      </div>
    </div>
  );
}
