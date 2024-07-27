import { SET_ACCESS_TOKEN, CLEAR_ACCESS_TOKEN } from './actions';

// Initial state
const initialState = {
  accessToken: null,
};

// Reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case CLEAR_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
