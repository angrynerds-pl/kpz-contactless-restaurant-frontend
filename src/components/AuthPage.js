import React, {useState, useEffect} from 'react';
<<<<<<< HEAD:src/components/App.js
// import { MdAccountCircle } from "react-icons/md";
import { Switch, Link, Route, useLocation, Router} from 'react-router-dom';
import Page from './Page'
// import HeaderAdminPanel from "./HeaderAdminPanel"
import Header from "./Header"
=======
import { MdAccountCircle } from "react-icons/md";
import { Switch, Link, Route, useLocation, useRouteMatch} from 'react-router-dom';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
>>>>>>> origin/develop:src/components/AuthPage.js
import '../styles/login-signup-view.scss';

function usePageViews(setActiveTab){
  let location = useLocation();
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location])// eslint-disable-line react-hooks/exhaustive-deps
}

const AuthPage =() => {

  const [activeTab, setActiveTab] = useState(''); 
  usePageViews(setActiveTab);

  const {url} = useRouteMatch();

  return (
<<<<<<< HEAD:src/components/App.js
      <Router>
        <div className='app'>
          <header className='head'>
            {<Header/>}
          </header>
          <main className='container'>
              <Switch>
                <Route path="/" exact>
                  <section className='links'>
                    <button className={activeTab === '/' ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to='/'>Log in</Link></button>
                    <button className={activeTab === '/register' ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to='/register'>Sign Up</Link></button>
                    </section>
                </Route>
                <Route path="/register">
                  <section className='links'>
                    <button className={activeTab === '/' ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to='/'>Log in</Link></button>
                    <button className={activeTab === '/register' ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to='/register'>Sign Up</Link></button>
                  </section>
                </Route>
                <Route path="/admin-panel">
                  {null}
                </Route>
              </Switch>
            <section>
              {<Page/>}
            </section>
          </main>             
          <footer>Copywrites AngryNerds &#169; Konferencja Projektów Zespołowych Wydział Elektroniki Politechniki Wrocławskiej</footer>
        </div>
      </Router>
=======
    <>
      <div className='auth'>
        <header className='head'>
          <MdAccountCircle className='head__icon'/>
        </header>
        <main className='container'>
          <section className='links'>
            <button className={activeTab === `${url}` ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to={`${url}`}>Log in</Link></button>
            <button className={activeTab === `${url}/register` ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to={`${url}/register`}>Sign Up</Link></button>
          </section>
          <section>
            <Switch>
              <Route path={`${url}/register`} component={RegisterForm}/>
              <Route path={`${url}/login`}>
                  <LoginForm msg='Account created! Feel free to log in!'/>
              </Route>
              <Route path={`${url}`} component={LoginForm}/>
            </Switch>
          </section>
        </main>             
        <footer>Copywrites AngryNerds &#169; Konferencja Projektów Zespołowych Wydział Elektroniki Politechniki Wrocławskiej</footer>
      </div>
    </>
>>>>>>> origin/develop:src/components/AuthPage.js
  );
}

export default AuthPage;
