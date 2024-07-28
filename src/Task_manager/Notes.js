import axios from "axios";

const flaskapi = import.meta.env.VITE_API_FLASKAPI
export const getTaks = async (accessToken) => {
    try {
        const response = await axios.get(`${flaskapi}/task/get_tasks`, {
            params: {
                project_id : 1,  
            },
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${accessToken}`
            }
        })
        return response;
    } catch (e) {
        return e;
    }
}

