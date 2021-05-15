import Restaurant from './Restaurant';

import '../styles/restaurant-list.scss'

const RestaurantList = (props) => {
    return ( 
        <ul className="all-restaurants__table">
            {props.restaurants.map(restaurant => (
            <Restaurant 
                key={restaurant.id}
                id={restaurant.id} 
                image={restaurant.image} 
                name={restaurant.name} 
                street={restaurant.street}
                streetNr={restaurant.streetNr}
                city={restaurant.city} 
            />))}
        </ul>
    );
}
 
export default RestaurantList;