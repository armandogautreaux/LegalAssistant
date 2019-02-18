import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import UserCreate from './users/UserCreate';
import Header from './Header';
import UserDashboard from './users/UserDashboard';
import SignIn from './users/SignIn';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={UserCreate} />
            <Route path="/users/dashboard" exact component={UserDashboard} />
            <Route path="/users/signup" exact component={SignIn} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
