import React, {useRef} from 'react';
import { useDispatch, useStore } from 'react-redux';
import '../styles/menu-modal.scss';
import { editRestaurant } from '../state/actions';


const RestaurantModal = ({closeModal,id, setLoadedRestaurants}) => {
    const dispatchEditRestaurant = useDispatch()
    const store = useStore();
    const restaurant = store.getState().addRestaurantReducer.restaurants.filter(obj => {
        return obj.id === id;
    })[0];
    let editedRestaurant = {...restaurant};
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const descInputRef = useRef()
    const cityInputRef = useRef()
      
    const handleRestaurantEdit = (e) => {
        e.preventDefault();

        editedRestaurant.name = nameInputRef.current.value;
        editedRestaurant.address = streetInputRef.current.value;
        editedRestaurant.city = cityInputRef.current.value;
        editedRestaurant.description = descInputRef.current.value;
        
        const editedRestaurantId = id;
        
        dispatchEditRestaurant(editRestaurant(editedRestaurant,editedRestaurantId));
        setLoadedRestaurants(store.getState().addRestaurantReducer.restaurants);
        closeModal();

    }
    return (
        <div className='overlay' onClick={(e)=>{
            if (e.target.className === 'overlay'){
                closeModal();
            }
        }}>
            <div className='modal'>
                <p className='modal__title'>Edycja Twojej Restauracji</p>
                <form className='modal__form form restaurant-form'>                   
                   <div className="form__label">
                       <label htmlFor="name">Restaurant name</label>
                       <input type="text" required id="name" ref={nameInputRef} />
                   </div>
                   <div className="form__label">
                       <label htmlFor="street">Address</label>
                       <input type="text" required id="street" ref={streetInputRef} />
                   </div>
                   <div className="form__label">
                       <label htmlFor="city">City</label>
                       <input type="text" id="city"  ref={cityInputRef} />
                   </div>
                   <div className="form__label">
                       <label htmlFor="desc">Short restaurant description</label>
                       <textarea rows='3' cols='20' type="text" required id="desc" ref={descInputRef} />
                   </div>
                   <button className='form__btn' onClick={(e)=>handleRestaurantEdit(e)}>Edit Restaurant</button>
           </form>
            </div>
        </div>
    )
}

export default RestaurantModal
