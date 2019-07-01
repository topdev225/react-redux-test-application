// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {userReducer} from './userReducer';
import {expenseReducer} from './expenseReducer';
import { reducer as sematable } from 'sematable';

export default combineReducers({
  appState:appReducer,
  userState:userReducer,
  expenseState:expenseReducer,
  routing,
  sematable,
  // More reducers if there are
  // can go here
})
 
