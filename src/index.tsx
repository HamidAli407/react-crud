import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app/components/app/App';
// import Crud from './app/components/crud/Crud';
import {IntlProvider} from 'react-intl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Auth0Provider} from '@auth0/auth0-react';

const domain:any = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId:any = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <IntlProvider locale="en-US">
    <Router>
      <App/>
    </Router>
    </IntlProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
