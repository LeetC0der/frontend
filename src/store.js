import { createStore } from 'redux';
import authReducer from './reducers'; // Path to your reducer

const store = createStore(authReducer);

export default store;
