import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './pages/Contact';
import Content from './pages/Content';
import Classes from './pages/Classes';
import Home from './pages/Home';
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
        <Route exact path="/classes" component={Classes} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/technologies" component={Technologies} />
        <Route exact path="/aluno" component={Technologies} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
