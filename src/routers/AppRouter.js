import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//Components
import Dashboard from '../components/dashboard';
import Greeting from '../components/greeting';
import NotFound from '../components/notFound';
import Team from '../components/team';
import Contact from '../components/contact';
import Support from '../components/support';
import Header from '../components/header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    
      <div>
      <Header/>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/team" component={Team} />
          <Route path="/support" component={Support} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Greeting} />
          <Route component={NotFound} />
        </Switch>
      </div>
  </Router>
);

export default AppRouter;