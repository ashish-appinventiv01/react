import { createStore } from 'redux';
import rootReducer from './reducer'; 

// Create the Redux store
const store = createStore(rootReducer);

export default store;
