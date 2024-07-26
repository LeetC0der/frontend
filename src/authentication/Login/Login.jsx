import React from "react";
import "./login.scss";
import logo from "./../../assets/1.png";
import LoginForm from "./LoginForm";
import noteshand from "./../../assets/Notes-bro.png";
export default function Login() {
  return (
    <div className="root centered">
      <div className="form centered">
        <div className="items flex_col">
          <img className="notesman" src={noteshand} alt="" />
          <span className="margin-b first">Welcome back!</span>
          <p className="margin-b second">
            Welcome back! Please enter you're details.
          </p>
          <LoginForm />
          <span className="signup centered">
            <p className="desc">
              Don't have an account
              <a href="http://localhost:5173/register">SignUp?</a>
            </p>
          </span>
        </div>
      </div>
      <div className="logo centered">
        <img style={{ width: "65%" }} src={logo} alt="company logo" />
      </div>
    </div>
  );
}
