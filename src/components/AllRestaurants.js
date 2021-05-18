import {useState, useEffect} from 'react';

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
            <RestaurantList restaurants={loadedRestaurants} />            
        </main>
    );
}
 
export default AllRestaurants;