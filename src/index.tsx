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

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en-US">
    <Router>
      <App/>
    </Router>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
