import {useHistory} from 'react-router-dom'
import NewRestaurantForm from "./NewRestaurantForm"
import '../styles/new-restaurant-form.scss'
import {createRestaurant} from '../api/createRestaurant';
import { useState } from 'react';

const AddRestaurant = () => {
    const history = useHistory();
    const [addError, setAddError] = useState(null);

    const addRestaurantHandler = (restaurantData) => {
        console.log(restaurantData);
        createRestaurant(restaurantData)
            .then(res=>{
                console.log(res);
                // history.push('/admin');
            })
            .catch(err=>{
                console.log(err);
                setAddError(err);
            });
    }

    return (
        <section className="add-form">
            <h1 className='add-form__title'>Add Restaurant</h1>
            <NewRestaurantForm onAddRestaurant={addRestaurantHandler} err={addError}/>
        </section>
    );
}
 
export default AddRestaurant;