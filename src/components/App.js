import React, {useState, useEffect} from 'react';
import { MdAccountCircle } from "react-icons/md";
import { Switch, Link, Route, useLocation} from 'react-router-dom';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import '../styles/login-signup-view.scss';

function usePageViews(setActiveTab){
  let location = useLocation();
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location])
}

function App() {
  const [activeTab, setActiveTab] = useState('') 
  usePageViews(setActiveTab);
  return (
    <>
      <div className='app'>
        <header className='head'>
          <MdAccountCircle className='head__icon'/>
        </header>
        <main className='container'>
          <section className='links'>
            <button className={activeTab === '/' ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to='/'>Log in</Link></button>
            <button className={activeTab === '/register' ? 'links__btn links__btn--active': 'links__btn'}><Link className='anchor' to='/register'>Sign Up</Link></button>
          </section>
          <section>
            <Switch>
              <Route path='/register'>
                  <RegisterForm />
              </Route>
              <Route path='/login'>
                  <LoginForm msg='Account created! Feel free to log in!'/>
              </Route>
              <Route path='/'>
                  <LoginForm/>
              </Route>
            </Switch>
          </section>
        </main>             
        <footer>Copywrites AngryNerds &#169; Konferencja Projektów Zespołowych Wydział Elektroniki Politechniki Wrocławskiej</footer>
      </div>
    </>
  );
}

export default App;
