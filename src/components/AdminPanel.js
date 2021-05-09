import React from 'react';
import RestaurantList from './RestaurantList'

const AdminPanel = () => {
    return (
        <>
            <button>Zarzdzanie restauracjami</button>
            <button>Zarzdzanie podkontami</button>
            <button>Statystyki</button>
            <br />
                <RestaurantList/>
        </>
    );
}
 
export default AdminPanel;