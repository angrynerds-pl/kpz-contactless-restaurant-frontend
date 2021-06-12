import { combineReducers } from 'redux';
import isLoggedReducer from './isLogged';
import addRestaurantReducer from './addRestaurant';

const allReducers = combineReducers({
    //reducers
    isLoggedReducer,
    addRestaurantReducer,
});

export default allReducers;