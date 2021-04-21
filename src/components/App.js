import React, {useState} from 'react';
import { MdAccountCircle } from "react-icons/md";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import '../styles/login-signup-view.scss';

function App() {
  const [activeTab, setActiveTab] = useState('login')
  
  return (
    <Router>
      <div className='app'>
        <header className='head'>
          <MdAccountCircle className='head__icon'/>
        </header>
        <main className='container'>
          <section className='links'>
            <button className={activeTab === 'login' ? 'links__btn links__btn--active': 'links__btn'} onClick={()=>setActiveTab('login')}><Link className='anchor' to='/'>Log in</Link></button>
            <button className={activeTab === 'register' ? 'links__btn links__btn--active': 'links__btn'} onClick={()=>setActiveTab('register')}><Link className='anchor' to='/register'>Sign Up</Link></button>
          </section>
          <section>
            <Switch>
              <Route path='/register'>
                  <RegisterForm/>
              </Route>
              <Route path='/'>
                  <LoginForm/>
              </Route>
            </Switch>
          </section>
        </main>             
        <footer>Copywrites AngryNerds &#169; Konferencja Projektów Zespołowych Wydział Elektroniki Politechniki Wrocławskiej</footer>
      </div>
    </Router>
  );
}

export default App;
