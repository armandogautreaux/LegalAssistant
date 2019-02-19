import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Header from './Header';
import LoginPage from './components/LoginPage/LoginPage';
import history from './history';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
