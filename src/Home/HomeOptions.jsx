import React, { act, useState } from "react";
import { PanelsTopLeft, Settings } from "lucide-react";
import "./homeoptions.scss";
export default function HomeOptions({ selectedOption }) {
  const [active, setactive] = useState(false);
  return (
    <div
      style={{ marginTop: "1rem", alignItems: "center" }}
      className="flex-col"
    >
      <span
        onClick={() => {
          selectedOption("task");
          setactive("task");
        }}
        className={active === "task" ? "active" : "bg"}
      >
        <PanelsTopLeft />
      </span>
      <span
        onClick={() => {
          setactive("settings");
          selectedOption("settings");
        }}
        className={active === "settings" ? "active" : "bg"}
      >
        <Settings />
      </span>
    </div>
  );
}
