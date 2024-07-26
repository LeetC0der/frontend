import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "./registerForm.scss";
import registerUser from "./registerHelper";

export default function RegisterForm() {
  const [passwordValidation, setPasswordValidation] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await registerUser(data);
    if (response.status !== 200) {
      toast.error(response.response.data.message, {
        position: "top-right",
      });
      console.log(response.message);
    } else {
      reset();
      toast.success("Test", {
        position: "top-right",
      });
      console.log(response);
    }
  };

  const valid_pass = (event) => {
    setPasswordValidation(event.target.value);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>
          <p className="name">UserName</p>
          <input
            className="inputs"
            {...register("username", {
              required: true,
            })}
            type="text"
          />
          {errors.username?.type === "required" && (
            <div className="error">This is a required field *</div>
          )}
        </span>
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
            {/* Toggle password visibility */}
            {!showPass && passwordValidation ? (
              <EyeOff onClick={togglePasswordVisibility} className="icons" />
            ) : passwordValidation ? (
              <Eye onClick={togglePasswordVisibility} className="icons" />
            ) : (
              ""
            )}
          </div>
          {errors.password && (
            <p className="error">This is a required field *</p>
          )}
        </span>
        <button className="submit" type="submit">
          Sign Up
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
