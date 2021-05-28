import Restaurant from './Restaurant';
import {Link} from 'react-router-dom'
import { IoAddCircle } from "react-icons/io5";
import '../styles/restaurant-list.scss';
import restaurantLogo from '../image/exmpl-logo.jpg';
import MenuModal from './MenuModal';
import { useState } from 'react';

const RestaurantList = ({restaurants}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    const openMenuModal = (id) => {
        setShowModal(true);
        setSelectedRestaurantId(id);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return ( 
        <>  
            {showModal && <MenuModal closeModal={()=>handleCloseModal()} id={selectedRestaurantId}/>} 
            <ul className="all-restaurants__list">
                {restaurants.map(restaurant => (
                <Restaurant 
                    key={restaurant.id}
                    image={restaurantLogo} 
                    name={restaurant.name} 
                    address={restaurant.address}
                    city={restaurant.city} 
                    desc={restaurant.description}
                    handleEditMenuClick={()=>openMenuModal(restaurant.id)}
                />))}
                <li className="all-restaurants__addrestaurant">
                        <IoAddCircle className="all-restaurants__icon" />
                        <button><Link style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', color: '#37323E'}} to="/new-restaurant">Dodaj restaurację</Link></button>
                </li>
            </ul>
        </>
        
    );
}
 
export default RestaurantList;