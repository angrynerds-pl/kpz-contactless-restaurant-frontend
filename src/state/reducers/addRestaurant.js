import {v4 as uuid} from 'uuid';
const addRestaurantReducer = (state = {
    restaurants: [
            {
            id: uuid(),
            address: 'Lotnicza 2',
            city: 'Szymanów',
            description: 'Zdrowe, smaczne posiłki',
            name: 'Restauracja Kocioł',
            menu: [
                {id:uuid(),name:'Pierogi ruskie', price: 9.99},
            ]},
    ],
}, action) => {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {
                ...state,
                restaurants: [...state.restaurants, action.restaurant]
            };
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
            const deletedPosIndex = state.restaurants[RestaurantIndex].menu.findIndex((item)=> item.id === action.positionId);

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