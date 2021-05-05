import React, {useState, useEffect} from 'react';
import { MdAccountCircle } from "react-icons/md";
import { Switch, Link, Route, useLocation, useRouteMatch} from 'react-router-dom';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
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
  );
}

export default AuthPage;
