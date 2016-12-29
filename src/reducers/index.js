import { combineReducers } from 'redux';
import github from './gitReducer';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';


const rootReducer = combineReducers({
  github,
  loadingBar: loadingBarReducer,
  routing: routerReducer
});

export default rootReducer;
