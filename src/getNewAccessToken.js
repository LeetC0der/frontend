import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setAccessToken } from "./actions";

export const useGetNewToken = () => {
    const [cookies] = useCookies(["refresh_token"]);
    const dispatch = useDispatch();
    const getNewToken = async () => {
        try {
            const flaskapi = import.meta.env.VITE_API_FLASKAPI;
            const response = await axios.post(
                `${flaskapi}/refresh`,{},
                {
                    headers: {
                        Authorization: `Bearer ${cookies.refresh_token}`,
                    },
                }
            );
            dispatch(setAccessToken(response.data.access_token));
            return response.data.access_token;
        } catch (error) {
            console.error("Error retrieving new token:", error);
            return null;
        }
    };

    return getNewToken;
};
