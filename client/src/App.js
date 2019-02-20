import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import DashBoard from './components/Dashboard';

import history from './history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/dashboard" exact component={DashBoard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
