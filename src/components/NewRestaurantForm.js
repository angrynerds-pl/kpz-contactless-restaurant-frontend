import {useRef} from 'react'


const NewRestaurantForm = ({onAddRestaurant,error}) => {
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault(); 
        const enteredName = nameInputRef.current.value 
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const restaurantData = {
            restaurant:{
                address: {
                    address_line_1: enteredStreet,
                    address_line_2: '',
                    postalCode: enteredPostalCode,
                    city: enteredCity,
                },
                description: 'Opis',
                name: enteredName,
            }
           
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
                        <label htmlFor="postalCode">Postal Code</label>
                        <input type="text" required id="postalCode" ref={postalCodeInputRef} />
                    </div>
                    <div className="form__label">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city"  ref={cityInputRef} />
                    </div>
                    {error ? <p className='form__error'>{error}</p> : ''}
                    <button>Create Restaurant</button>
                    
            </form>
    );
}
 
export default NewRestaurantForm;