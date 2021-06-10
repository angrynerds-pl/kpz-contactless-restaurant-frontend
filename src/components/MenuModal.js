import React, { useState,useRef } from 'react';
import { useDispatch, useStore } from 'react-redux';
import '../styles/menu-modal.scss';
import {v4 as uuid} from 'uuid';
import {MdDeleteForever} from 'react-icons/md';
import { addMenuPos, deleteMenuPos } from '../state/actions';


const MenuModal = ({closeModal,id}) => {
    const dispatchMenuPos = useDispatch()
    const store = useStore();
    const restaurant = store.getState().addRestaurantReducer.restaurants.filter(obj => {
        return obj.id === id;
    });

    const menu = restaurant[0].menu;
    const [menuItems, setMenuItems] = useState(menu);
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    
   
    const handleNewMenuPos = (e) => {
        e.preventDefault();
        const enteredFoodName = nameInputRef.current.value;
        const enteredFoodPrice = priceInputRef.current.value;

        const newMenuPos = {
            id: uuid(),
            name: enteredFoodName,
            price: enteredFoodPrice
        }

        dispatchMenuPos(addMenuPos(id,newMenuPos));
        setMenuItems([...menuItems,newMenuPos]);
    }
    const handleDelete = (posId)=>{
        dispatchMenuPos(deleteMenuPos(id,posId));
        setMenuItems(menuItems.filter(item => item.id !== posId));
    }

    return (
        <div className='overlay' onClick={(e)=>{
            if (e.target.className === 'overlay'){
                closeModal();
            }
        }}>
            <div className='modal'>
                <p className='modal__title'>Edycja menu Twojej Restauracji</p>
                <ul className='modal__menu'>
                {menu.map(position=>(
                    <li key={position.id} className='position'>
                        <div>
                            <p className='position__name'>{position.name}</p>
                            <p className='position__price'>{position.price} PLN</p>
                        </div>
                        <MdDeleteForever className='position__icon' onClick={()=>{handleDelete(position.id)}}/>
                    </li>
                ))}
                </ul>
                <form className='modal__form form'>
                    <title className='form__title'>Dodaj pozycję</title>
                    <div className="form__label">
                        <label htmlFor="name">Name</label>
                        <input type="text" required id="name" ref={nameInputRef} />
                    </div>
                    <div className="form__label">
                        <label htmlFor="price">Price</label>
                        <input type="text" required id="price" ref={priceInputRef} />
                    </div>
                    <button className='form__btn' type="submit"  onClick={(e)=>handleNewMenuPos(e)}>Zatwierdź</button>
                </form>
            </div>
        </div>
    )
}

export default MenuModal
