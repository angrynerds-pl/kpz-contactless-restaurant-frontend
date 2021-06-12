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
            const oldRestaurants = [...state.restaurants]
            console.log(oldRestaurants );
            console.log(action.id);
            const newRestaurants = oldRestaurants.filter(rest => rest.id !== action.id);
            newRestaurants.push(action.restaurant);
            return {
                ...state,
                restaurants: newRestaurants
            }
        case 'ADD_POS':
            const updatingRestaurantIndex = state.restaurants.findIndex((rest)=>{
                return rest.id === action.restaurantId;
            });
            return{
                ...state,
                restaurants: [...state.restaurants, state.restaurants[updatingRestaurantIndex].menu.push(action.menuPos)]
            }
        case 'DELETE_POS':
            const RestaurantIndex = state.restaurants.findIndex((rest)=>{
                return rest.id === action.restaurantId;
            });

            const oldMenu = state.restaurants[RestaurantIndex].menu;
            const newMenu = oldMenu.filter(item=>item.id !== action.positionId);
            
            let restaurant = state.restaurants[RestaurantIndex]
            restaurant.menu = newMenu;
                        
            let restaurants = state.restaurants;
            restaurants[RestaurantIndex] = restaurant;

            return{
                ...state,
                restaurants: restaurants
            }
        default:
            return state;
    }
};
export default addRestaurantReducer;