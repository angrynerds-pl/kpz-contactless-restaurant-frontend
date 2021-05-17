import {useRef} from 'react'


const NewMeetupForm = ({onAddRestaurant}) => {
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const streetNrInputRef = useRef()
    const cityInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault() 

        const enteredName = nameInputRef.current.value 
        const enteredStreet = streetInputRef.current.value
        const enteredStreetNr = streetNrInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const restaurantData = {
            name: enteredName,
            street: enteredStreet,
            streetNr: enteredStreetNr,
            city: enteredCity,
        }
        onAddRestaurant(restaurantData);
    }

    return (
            <form onSubmit={submitHandler}>
                    
                    <div className="form__label">
                        <label htmlFor="name">Nazwa lokalu</label>
                        <input type="text" required id="name" ref={nameInputRef} />
                    </div>
                    <div className="form__label">
                        <label htmlFor="street">Ulica</label>
                        <input type="text" required id="street" ref={streetInputRef} />
                    </div>
                    <div className="form__label">
                        <label htmlFor="streetNr">Numer budynku</label>
                        <input type="text" required id="streetNr" ref={streetNrInputRef} />
                    </div>
                    <div className="form__label">
                        <label htmlFor="city">Miasto</label>
                        <input type="text" id="city"  ref={cityInputRef} />
                    </div>
                    <div className="form__label">
                        <button>Dodaj restaurację</button>
                    </div>
            </form>
    );
}
 
export default NewMeetupForm;