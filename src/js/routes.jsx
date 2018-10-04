import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/container/FormContainer';
import Home from './components/container/Home';
import Contact from './components/container/Contact';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={Home} />
  </Route>
);