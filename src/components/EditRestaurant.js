import {useHistory} from 'react-router-dom'
import EditRestaurantForm from "./EditRestaurantForm"
import '../styles/new-restaurant-form.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editRestaurant } from '../state/actions/index';

const EditRestaurant = () => {
    const history = useHistory();
    const [addError, setAddError] = useState(null);
    const dispatchEditRestaurant = useDispatch();
    const editRestaurantHandler = (restaurantData) => {
        dispatchEditRestaurant(editRestaurant(restaurantData));
        history.push('/admin')
    }

    return (
        <section className="add-form">
            <h1 className='add-form__title'>Edytuj dane restauracji</h1>
            <EditRestaurantForm onEditRestaurant={editRestaurantHandler} err={addError}/>
        </section>
    );
}
 
export default EditRestaurant;