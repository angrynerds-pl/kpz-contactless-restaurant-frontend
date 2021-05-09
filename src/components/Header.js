import React from 'react';
import { Route, Switch } from 'react-router';
import { MdAccountCircle } from "react-icons/md";
import HeaderAdminPanel from "./HeaderAdminPanel"

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact><MdAccountCircle className='head__icon'/></Route>
                <Route path="/register"><MdAccountCircle className='head__icon'/></Route>
                <Route path="/admin-panel"><HeaderAdminPanel/></Route>
            </Switch>
        </>
    );
}
 
export default Header;