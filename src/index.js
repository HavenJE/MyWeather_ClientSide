// to setup redux, we need 'react-redux' library, redux library, and thunk library 

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import { rootReducer } from './reducers/rootReducer'

// use composeWithDevTools instead of windows.__devtools 
import { composeWithDevTools } from 'redux-devtools-extension';

// Routing 
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';

// Auth0 authenticator 
// import { Auth0Provider } from '@auth0/auth0-react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// create a store for redux => createStore - inside the createStore method, we need to pass: 1. reducer 2. devtools 3. thunk  
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>

    {/* <Auth0Provider
      domain="dev-js90blpn.au.auth0.com"
      clientId="vjszO4ak3YgfgJrj1pRdSCZexUh0AedB"
      redirectUri={window.location.origin}
    >
</Auth0Provider> */}

    <Router>
      <App />
    </Router>


  </Provider >,

  document.getElementById('root')
);


