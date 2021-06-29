import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Team from './pages/Team';
import Technologies from './pages/Technologies';

/** TO DO: Implement protected routes... */
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/content" component={Content} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/technologies" component={Technologies} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
