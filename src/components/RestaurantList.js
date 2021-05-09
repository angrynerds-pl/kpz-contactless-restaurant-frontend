import React, {useState} from 'react';

import Restaurant from './Restaurant'
import AddRestaurant from './AddRestaurant'

const RestaurantList = (props) => {

    const [restaurantList, setRestaurantList] = useState([
        {
            id: 0,
            name: "Tellus Restaurant",
            street: "Przykladowa",
            streetNr: 10,
            city: "Wroclaw",
        },
        {
            id: 1,
            name: "Tellus Restaurant",
            street: "Przykladowa",
            streetNr: 10,
            city: "Wroclaw",
        },
        {
            id: 2,
            name: "Tellus Restaurant",
            street: "Przykladowa",
            streetNr: 10,
            city: "Wroclaw",
        },
    ],
    )
    let counter = 3

    const deleteRestaurant = (id) => {       
        let restaurantList =  [...restaurantList]
        restaurantList = restaurantList.filter(restaurant => restaurant.id !== restaurantList.id) 
        setRestaurantList({
            restaurantsList: restaurantList
        })  
    }

    const editRestaurant = () => {

    } 

    const addRestaurant = (id, name, street, streetNr, city) => {
        const restaurant = { 
            id: counter+1, 
            name: name, 
            street: street, 
            streetNr: streetNr, 
            city: city,
        }
        counter++ 
    
        setRestaurantList( prevState => ({
            restaurantList: [...prevState, restaurant]
        }))
        return true
    }

    const list = restaurantList.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} delete={deleteRestaurant} edit={editRestaurant} />
    ))

    return (
        <div>
            <h2>Lista restauracji</h2>
            <div>
                <ul>
                    {list}
                </ul>
                <div>
                    <AddRestaurant add={addRestaurant} restaurant={restaurantList}/>
                </div>
            </div>
        </div>
    );
}
 
export default RestaurantList;