import '../styles/restaurant-list.scss'

const Restaurant = (props) => {

    return (
        <li className="all-restaurants__restaurant restaurant">
            
            <img className="restaurant__image" src='../image/1.jpg' alt={`${props.name}-logo`} />   
            <h2 className='restaurant__name'>{props.name}</h2>
            <address className='restaurant__address'>{`ul. ${props.street} ${props.streetNr}, ${props.city}`}</address>
            <button className="restaurant__btn edit_data">Edytuj dane restauracji</button> 
            <button className="restaurant__btn edit_menu">Edytuj menu restauracji</button> 
            
        </li>
    );
}
 
export default Restaurant;