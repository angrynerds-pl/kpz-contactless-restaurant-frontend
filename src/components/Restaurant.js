import '../styles/restaurant-list.scss'

const Restaurant = (props) => {

    return (
        <li className="all-restaurants__restaurant">
            <div>
                <img className="all-restaurants__resimage" src='../image/1.jpg' alt={props.name} />   
            </div>
            <div className="all-restaurants__resdata">
                <h2>{props.name}</h2>
                <address>{`ul. ${props.street} ${props.streetNr}, ${props.city}`}</address>
            </div>
            <div className="all-restaurants__buttons">
                <button className="all-restaurants__editdata">Edytuj dane restauracji</button> 
                <button className="all-restaurants__editmenu">Edytuj menu restauracji</button> 
            </div>
        </li>
    );
}
 
export default Restaurant;