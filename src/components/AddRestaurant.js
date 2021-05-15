import {useHistory} from 'react-router-dom'

import NewRestaurantForm from "./NewRestaurantForm"

import '../styles/new-restaurant-form.scss'

const AddRestaurant = () => {
    const history = useHistory()

    const addRestaurantHandler = (restaurantData) => {
        fetch(
            'https://projekt-zespolowy-56cfe-default-rtdb.firebaseio.com/restaurants.json',
            {
                method: 'POST',
                body: JSON.stringify(restaurantData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/admin') 
        })
    }

    return (
        <section className="form">
            <h1>Dodaj nową restaurację</h1>
            <NewRestaurantForm onAddMeetup={addRestaurantHandler} />
        </section>
    );
}
 
export default AddRestaurant;