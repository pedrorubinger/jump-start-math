import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './pages/Contact';
import Content from './pages/Content';
import ClassSignIn from './pages/ClassSignIn';
import Classes from './pages/Classes';
import ClassesReports from './pages/Reports/Classes';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Team from './pages/Team';
import Technologies from './pages/Technologies';
import ProtectedRoute from './components/ProtectecRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/quiz" component={Quiz} /> */}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/content" component={Content} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/technologies" component={Technologies} />
        <Route
          path="/teacher/class/report"
          component={ClassesReports}
          permissions={['teacher']}
          exact
          isPrivate
        />
        <ProtectedRoute
          path="/teacher/classes"
          component={Classes}
          permissions={['teacher']}
          exact
          isPrivate
        />
        <ProtectedRoute
          path="/student/class-sign-in"
          component={ClassSignIn}
          permissions={['student']}
          exact
          isPrivate
        />
        <ProtectedRoute
          path="/student/quiz"
          component={Quiz}
          permissions={['student']}
          exact
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
