import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, Link, Switch} from 'react-router';
import SummaryPage from './SummaryPage';

ReactDOM.render((
  <Switch>
     <Route path = "/" component = {App}>
        <Route path = "SummaryPage" component = {SummaryPage} />       
     </Route>
  </Switch>
),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
