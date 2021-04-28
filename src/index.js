import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './state/reducers'
import './styles/index.scss';
import App from './components/App';
import thunk from "redux-thunk" ;
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducers,composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


