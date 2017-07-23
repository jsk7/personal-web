import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Code from './containers/Code'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="code" component={Code}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
