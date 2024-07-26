import React from "react";
import "./register.scss";
import blackLogo from "./../../assets/1.png";
import notes from "./../../assets/mobile.png";
import RegisterForm from "./RegisterForm";
export default function Register() {
  return (
    <div className="boss centered">
      <div className="logo centered ">
        <img style={{ width: "65%" }} src={blackLogo} alt="" />
      </div>
      <div className="form centered">
        <div className="items flex-col">
          <img className="notesman" src={notes} alt="notes man" />
          <p className="margin-b first">Get Started. </p>
          <span className="margin-b second">
            Please provide the below Information.
          </span>
          <RegisterForm />
          <span className="signup centered">
            <p className="desc">
              Have an account need to
              <a href="http://localhost:5173/">Login?</a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
