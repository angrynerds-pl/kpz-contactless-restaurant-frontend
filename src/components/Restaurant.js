import React from 'react';

const Restaurant = (props,{ restaurant}) => {

    const {id} = props

    return (
        <>
            <li>
                <h2>{props.restaurant.name}</h2>
                <p>{`ul. ${props.restaurant.street} ${props.restaurant.streetNr}, ${props.restaurant.city}`}</p>
                <button onClick={() => props.edit(id)}>Edytuj restauracje</button>
                <button onClick={() => props.delete(id)}>Usuń restauracje</button>
            </li>
        </>
    );
}
 
export default Restaurant;