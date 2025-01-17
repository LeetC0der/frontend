import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./loginform.scss";
import loginUser from "./loginHelper";
import { useDispatch } from "react-redux";
import { setAccessToken } from "./../../actions.js";
import { Eye, EyeOff } from "lucide-react";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import { useCookies } from "react-cookie";
export default function LoginForm() {
  const [passwordValidation, setPasswordValidation] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [cookie, setCookie] = useCookies(["refresh_token"]);
  const dispatch = useDispatch();
  const setRefreshToken = (refreshToken) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000); // Set expiration to 30 days
    setCookie("refreshToken", refreshToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict", // Optional, for additional security
      expires,
    });
  };
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const formData = async (data) => {
    const response = await loginUser(data);
    if (response.response && response.response.status !== 200) {
      toast.error(response.response.data.message, {
        position: "top-right",
      });
    } else {
      sessionStorage.setItem("user_profile", JSON.stringify(response.userInfo));
      dispatch(setAccessToken(response.access_token));
      setRefreshToken(response.refresh_token);
      reset();
      setPasswordValidation(null);
      toast.success("Login successful!", {
        position: "top-right",
      });
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    }
  };

  const valid_pass = (event) => {
    setPasswordValidation(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit(formData)}>
        <span>
          <p className="name">Email</p>
          <input
            className="inputs"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
            type="email"
          />
          {errors.email?.type === "required" && (
            <div className="error">This is a required field *</div>
          )}
          {errors.email?.type === "pattern" && (
            <div className="error">Enter a valid email address *</div>
          )}
        </span>
        <span>
          <p className="name">Password</p>
          <div className="pass">
            <input
              id="regpass"
              className="inputs"
              {...register("password", {
                required: true,
              })}
              type={showPass ? "text" : "password"}
              onChange={valid_pass}
            />
            {!showPass && passwordValidation ? (
              <EyeOff onClick={togglePasswordVisibility} className="icons" />
            ) : passwordValidation ? (
              <Eye onClick={togglePasswordVisibility} className="icons" />
            ) : null}
          </div>
          {errors.password && (
            <p className="error">This is a required field *</p>
          )}
        </span>
        <button className="submit" type="submit">
          Login
        </button>
      </form>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
