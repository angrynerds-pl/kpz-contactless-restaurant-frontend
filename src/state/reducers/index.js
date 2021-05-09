import { combineReducers } from 'redux';
import isLoggedReducer from './isLogged'

const allReducers = combineReducers({
    //reducers
    isLoggedReducer,
});

export default allReducers;