import '../styles/restaurant-list.scss'

const Restaurant = ({image,name,address,city,desc,handleEditMenuClick, handleEditRestaurantClick}) => {
    
    return (
        <li className="all-restaurants__restaurant restaurant">
            
            <img className="restaurant__image" src={image} alt={`${name}-logo`} />   
            <h2 className='restaurant__name'>{name}</h2>
            <address className='restaurant__address'>{`ul. ${address}, ${city}`}</address>
            <p className='restaurant__desc'>{desc}</p>
            <button className="restaurant__btn edit_data" onClick={()=>handleEditRestaurantClick()}>Edytuj dane restauracji</button> 
            <button className="restaurant__btn edit_menu" onClick={()=>handleEditMenuClick()}>Edytuj menu restauracji</button> 
            
        </li>
    );
}
 
export default Restaurant;