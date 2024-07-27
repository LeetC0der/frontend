import React, { useState } from "react";
import { PanelsTopLeft, Settings } from "lucide-react";
import "./homeoptions.scss";
export default function HomeOptions({ selectedOption }) {
  const [active, setactive] = useState(false);
  return (
    <div
      style={{ marginTop: "1rem", alignItems: "center" }}
      className="flex-col"
    >
      <span className={active === "task" ? "bg" : ""}>
        <PanelsTopLeft
          className={active === "task" ? "icons active" : "icons"}
          onClick={() => {
            selectedOption("task");
            setactive("task");
          }}
        />
      </span>
      <span className={active === "settings" ? "bg" : ""}>
        <Settings
          className={active === "settings" ? "icons active" : "icons"}
          onClick={() => {
            setactive("settings");
            selectedOption("settings");
          }}
        />
      </span>
    </div>
  );
}
