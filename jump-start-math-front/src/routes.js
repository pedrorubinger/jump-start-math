import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Markdown from './pages/Markdown';

/** TO DO: Implement protected routes... */
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/markdown" component={Markdown} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
