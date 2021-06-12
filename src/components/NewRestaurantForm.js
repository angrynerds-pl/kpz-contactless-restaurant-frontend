import {useRef} from 'react';
import {v4 as uuid} from 'uuid';


const NewRestaurantForm = ({onAddRestaurant}) => {
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const descInputRef = useRef()
    const cityInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault(); 
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const restaurantData = {
                id: uuid(),
                address: enteredStreet,
                city: enteredCity,
                description: enteredDesc,
                name: enteredName,
                menu: [],
        }
        onAddRestaurant(restaurantData);
    }

    return (
            <form className='form' onSubmit={submitHandler}>
                    
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
                    <button>Create Restaurant</button>
                    
            </form>
    );
}
 
export default NewRestaurantForm;