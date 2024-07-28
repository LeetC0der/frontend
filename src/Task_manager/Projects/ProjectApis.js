import axios from "axios";

const fetchUserProjects = async (accessToken) => {
    const flaskapi = import.meta.env.VITE_API_FLASKAPI;
    const user_profile = sessionStorage.getItem('user_profile')
    const user = user_profile ? JSON.parse(user_profile) : ""
    try {
        const response = await axios.get(`${flaskapi}/project/get_projects`, {
            params: {
                user_id: user.id
            },
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}


export default fetchUserProjects;