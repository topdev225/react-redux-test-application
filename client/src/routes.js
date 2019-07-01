// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Expenses from './containers/Expenses';

import { withBasename } from './utils/params';

export default (
  <Route path={ withBasename('/') } component={App}>
     <IndexRoute component={Home} />
     <Route path={ withBasename('/login') } component={Login} />
     <Route path={ withBasename('/register') } component={Register} />
     <Route path={ withBasename('/Expenses') } component={Expenses} />
  </Route>
)
