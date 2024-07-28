import axios from "axios";

const flaskapi = import.meta.env.VITE_API_FLASKAPI;
const user_profile = sessionStorage.getItem("user_profile");
const user = user_profile ? JSON.parse(user_profile) : "";
const fetchUserProjects = async (accessToken) => {
  try {
    const response = await axios.get(`${flaskapi}/project/get_projects`, {
      params: {
        user_id: user.id,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
      return response;
  } catch (e) {
      return e;
  }
};

export const addProjects = async (accessToken, data) => {
  try {
    const response = await axios.post(
      `${flaskapi}/project/create_project?user_id=${user.id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return {
      response: {
        status: 201,
      },
    };
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default fetchUserProjects;
