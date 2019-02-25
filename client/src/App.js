import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import DashBoard from './components/Dashboard';
import FileShow from './components/files/FileShow';
import FileCreate from './components/files/FileCreate';
import FileEdit from './components/files/FileEdit';
import FileDelete from './components/files/FileDelete';
import Results from './components/Results';
// import SearchLink from './components/SearchLink';

import history from './history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" exact component={Results} />
            {/* <SearchLink /> */}
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/dashboard" exact component={DashBoard} />
            <Route path="/files/new" exact component={FileCreate} />
            <Route path="/files/:id" exact component={FileShow} />
            <Route path="/files/delete/:id" exact component={FileDelete} />
            {/* <Route path="/results" exact component={Results} /> */}
            <Route path="/files/edit/:id" exact component={FileEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
