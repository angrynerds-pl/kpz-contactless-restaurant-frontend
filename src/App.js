import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from './components/AuthPage';
import AdminPage from './components/AdminPage';
import AddRestaurant from './components/AddRestaurant'
import './styles/index.scss';

const App = () => {
    return (
        <div className='app'>
            <Switch>
                <Route path='/auth' component={AuthPage}/>
                <Route path='/admin' exact component={AdminPage}/>
                <Route path='/new-restaurant' component={AddRestaurant}/>
                <Route path='/' exact>
                    <Redirect to='/auth'></Redirect>
                </Route>
            </Switch>
        </div>
    )
}

export default App
