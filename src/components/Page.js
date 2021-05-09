import React, {Switch, Route} from 'react';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import AdminPanel from './AdminPanel'

const Page = () => {
    return (
        <>
            <Switch>
                <Route path='/register'>
                    <RegisterForm />
                </Route>
                <Route path='/login'>
                    <LoginForm msg='Account created! Feel free to log in!'/>
                </Route>
                <Route path='/admin-panel'>
                    <AdminPanel/>
                </Route>
                <Route path='/'>
                    <LoginForm/>
                </Route>
            </Switch>
      </>
    );
}
 
export default Page;