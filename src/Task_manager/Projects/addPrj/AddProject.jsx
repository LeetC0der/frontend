import React from "react";
import { useForm } from "react-hook-form";
import "./addproject.scss";
import { addProjects } from "../ProjectApis";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import { toast, ToastContainer } from "react-toastify";
export default function AddProject({ accessToken }) {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const formAction = async (data) => {
    const response = await addProjects(accessToken, {
      title: data.projectName,
    });
    if (response.response.status !== 201) {
      toast.error(response.response.data.message);
      return;
    } else {
      toast.success("Project added successfully!");
      reset();
    }
    console.log(response);
  };
  return (
    <>
      <div className="parent">
        <form onSubmit={handleSubmit(formAction)}>
          <span className="child">
            <input
              className="prj-int"
              placeholder="+  Add new project..."
              {...register("projectName", {
                required: true,
              })}
              type="text"
            />
            {errors.projectName?.type === "required" && (
              <div className="error">Name you project *</div>
            )}
          </span>
        </form>
      </div>
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
