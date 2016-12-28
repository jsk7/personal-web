import { combineReducers } from 'redux';
import github from './gitReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  github,
  routing: routerReducer
});

export default rootReducer;
