import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { IoAddCircle } from "react-icons/io5";

import RestaurantList from './RestaurantList'

import '../styles/restaurant-list.scss'

const AllRestaurants = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [loadedRestaurants, setLoadedRestaurants] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://projekt-zespolowy-56cfe-default-rtdb.firebaseio.com/restaurants.json'
        ).then((response) => {
            return response.json() 
        }).then(data => {
            const restaurants = []

            for (const key in data) {
                const restaurant = {
                    id: key,
                    ...data[key]
                }
                restaurants.push(restaurant)
            }
            setIsLoading(false)
            setLoadedRestaurants(restaurants)
        })
    }, [])

    if (isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <main className="all-restaurants">
            <h1>Twoje restauracje:</h1>
            <div className="all-restaurants__table">
                <RestaurantList restaurants={loadedRestaurants} />
                <div className="all-restaurants__addrestaurant">
                    <IoAddCircle className="all-restaurants__icon" />
                    <button><Link style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', color: '#37323E'}} to="/new-restaurant">Dodaj restaurację</Link></button>
                </div>
            </div>
        </main>
    );
}
 
export default AllRestaurants;