import {useHistory} from 'react-router-dom'
import NewRestaurantForm from "./NewRestaurantForm"
import '../styles/new-restaurant-form.scss';
import { useDispatch } from 'react-redux';
import { addRestaurant }from '../state/actions/index';

const AddRestaurant = () => {
    const history = useHistory();
    const dispatchAddRestaurant = useDispatch();
    const addRestaurantHandler = (restaurantData) => {
        dispatchAddRestaurant(addRestaurant(restaurantData));
        history.push('/admin')
    }

    return (
        <section className="add-form">
            <h1 className='add-form__title'>Add Restaurant</h1>
            <NewRestaurantForm onAddRestaurant={addRestaurantHandler} />
        </section>
    );
}
 
export default AddRestaurant;