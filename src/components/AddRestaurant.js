import React, {useState} from 'react';

const AddRestaurant = (props) => {

    const [restaurant, setRestauracja] = useState([
        {
            name: '',
            street: '',
            streetNr: 0,
            city: '',
        }
    ])

    const {id, name, street, streetNr, city} = restaurant

    const handleName = (e) => {
        setRestauracja({
            name: e.target.value
        })
    }

    const handleStreet = (e) => {
        setRestauracja({
            street: e.target.value
        })
    }

    const handleStreetNr = (e) => {
        setRestauracja({
            streetNr: e.target.value
        })
    }

    const handleCity = (e) => {
        setRestauracja({
            city: e.target.value
        })
    }

    const handleClick = () => {
        const add = props.add( name, street, streetNr, city)
        if (add === true) {
            setRestauracja({
                name: '',
                street: '',
                stretNr: 0,
                city: '',
            })
        }
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleName} placeholder="Nazwa restauracji"/>
            <input type="text" value={street} onChange={handleStreet} placeholder="Nazwa ulicy"/>
            <input type="number" value={streetNr} onChange={handleStreetNr} placeholder="nr Budynku"/>
            <input type="text" value={city} onChange={handleCity} placeholder="Nazwa miejscowości"/>
            <button onClick={handleClick}>Dodaj restaurację</button>
        </div>
    );
}
 
export default AddRestaurant;