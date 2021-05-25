import Restaurant from './Restaurant';
import {Link} from 'react-router-dom'
import { IoAddCircle } from "react-icons/io5";
import '../styles/restaurant-list.scss';
import restaurantLogo from '../image/exmpl-logo.jpg'

const RestaurantList = ({restaurants}) => {
    return ( 
        <ul className="all-restaurants__list">
            {restaurants.map(restaurant => (
            <Restaurant 
                key={restaurant.restaurant.name}
                image={restaurantLogo} 
                name={restaurant.restaurant.name} 
                address={restaurant.restaurant.address}
                city={restaurant.restaurant.city} 
                desc={restaurant.restaurant.description}
            />))}
            <li className="all-restaurants__addrestaurant">
                    <IoAddCircle className="all-restaurants__icon" />
                    <button><Link style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', color: '#37323E'}} to="/new-restaurant">Dodaj restaurację</Link></button>
            </li>
        </ul>
    );
}
 
export default RestaurantList;