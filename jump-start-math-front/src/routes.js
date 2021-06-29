import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Content from './pages/Content';

/** TO DO: Implement protected routes... */
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/content" component={Content} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
