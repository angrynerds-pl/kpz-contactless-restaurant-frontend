import React from 'react';
import {FaUserCircle} from 'react-icons/fa';

import '../styles/header-admin.scss'

const HeaderAdminPanel = () => {
    return (
        <header className="header-admin">
            <div className="header-admin__info">
                <h1>WITAJ W PANELU ADMINISTRACYJNYM</h1>
            </div>
            <div className="header-admin__info">
                <div className="header-admin__userinfo">
                    <h2>NAZWA FIRMY</h2>
                    <h2>NAZWA UŻYTKOWNIKA</h2>
                    <button>Edytuj ustawienia konta</button>
                </div>
                <div className="header-admin__userinfo">
                    <FaUserCircle className="header-admin__icon" />
                </div>
            </div>
        </header>
    );
}
 
export default HeaderAdminPanel;