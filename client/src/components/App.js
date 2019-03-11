import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import HomePage from './user/homePage/HomePage';
import RegisterPage from './user/registerPage/RegisterPage';
import LoginPage from './admin/loginPage/LoginPage';
import FileShow from './files/FileShow';
import FileCreate from './files/FileCreate';
import FileEdit from './files/FileEdit';
import FileDelete from './files/FileDelete';
import Search from './files/FilesSearch';
import withAuth from './admin/dashboard/withAuth';
// import Sidebar from './admin/dashboard/elements/Sidebar';

import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Header />
          {/* <Sidebar /> */}
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" exact component={Search} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/dashboard" exact component={withAuth} />
            <Route path="/files/new" exact component={FileCreate} />
            <Route path="/files/:id" exact component={FileShow} />
            <Route path="/files/delete/:id" exact component={FileDelete} />
            <Route path="/files/edit/:id" exact component={FileEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
