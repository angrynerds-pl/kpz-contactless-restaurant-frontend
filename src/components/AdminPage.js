import React from 'react';
import { Route, Switch } from 'react-router';
import AllRestaurants from './AllRestaurants'
import HeaderAdminPanel from './HeaderAdminPanel'

const AdminPage = () => {
    return (
        <>
            <HeaderAdminPanel />
            <Switch>
                <Route path="/admin">
                    <AllRestaurants />
                </Route>
            </Switch>
            <footer>Copywrites AngryNerds &#169; Konferencja Projektów Zespołowych Wydział Elektroniki Politechniki Wrocławskiej</footer>
        </>
    )
}

export default AdminPage;
