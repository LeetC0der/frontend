// Define action types
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const CLEAR_ACCESS_TOKEN = 'CLEAR_ACCESS_TOKEN';

// Action creators
export const setAccessToken = (token) => ({
  type: SET_ACCESS_TOKEN,
  payload: token,
});

export const clearAccessToken = () => ({
  type: CLEAR_ACCESS_TOKEN,
});
