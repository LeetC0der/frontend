import axios from "axios";


const registerUser = async (data) => {
    let reqApi = import.meta.env.VITE_API_FLASKAPI
    try {
        const response = await axios.post(`${reqApi}/signUp`, data);
        return response;
    } catch (e) {
        return e;
    }
}

export default registerUser;