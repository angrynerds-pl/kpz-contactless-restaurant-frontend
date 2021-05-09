import React, {useState, useEffect} from 'react';
// import { MdAccountCircle } from "react-icons/md";
import { Switch, Link, Route, useLocation, Router} from 'react-router-dom';
import Page from './Page'
// import HeaderAdminPanel from "./HeaderAdminPanel"
import Header from "./Header"
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
  );
}

export default App;
