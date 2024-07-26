import axios from "axios";

const flaskLogin = import.meta.env.VITE_API_FLASKAPI

const loginUser = async (event) => {
    console.log(flaskLogin);
    const data = {
        'email': event.email,
        'password': event.password
    }
    try {
        const response = await axios.post(`${flaskLogin}/`, data);
        console.log(response.data);
        return response.data;
    }
    catch (e) {
        console.log({ 'error': e });
        return e;
    }
}

export default loginUser;