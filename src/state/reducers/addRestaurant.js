const addRestaurantReducer = (state = {
    restaurants: [],
}, action) => {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {
                ...state,
                restaurants: [...state.restaurants, action.restaurant]
            };
        case 'EDIT_RESTAURANT':
            const oldRestaurants = state.restaurants
            const newRestaurants = oldRestaurants.filter(item => item.id !== action.restaurant.id).push(action.restaurant)
            console.log(newRestaurants);
            return state
        default:
            return state;
    }
};
export default addRestaurantReducer;