import {useRef} from 'react'


const NewMeetupForm = (props) => {
    const nameInputRef = useRef()
    // const imageInputRef = useRef()
    const streetInputRef = useRef()
    const streetNrInputRef = useRef()
    const cityInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault() 

        const enteredname = nameInputRef.current.value 
        // const enteredImage = imageInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredStreetNr = streetNrInputRef.current.value
        const enteredcity = cityInputRef.current.value

        const restaurantData = {
            name: enteredname,
            // image: enteredImage,
            street: enteredStreet,
            streetNr: enteredStreetNr,
            city: enteredcity,
        }

        props.onAddRestaurant(restaurantData)
    }

    return (
            <form onSubmit={submitHandler}>
                    {/* <div>
                        <label htmlFor="image">Meetup Title</label>
                        <input type="url" required id="image" ref={imageInputRef} />
                    </div> */}
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