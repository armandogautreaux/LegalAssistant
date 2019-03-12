import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Dashboard from '../components/admin/dashboard/Dashboard';
// import Header from '../';
import HomePage from './user/homePage/HomePage';
import RegisterPage from './user/registerPage/RegisterPage';
import LoginPage from './admin/loginPage/LoginPage';
import FileShow from './files/FileShow';
import FileCreate from './files/FileCreate';
import FileEdit from './files/FileEdit';
import FileDelete from './files/FileDelete';
import Search from './files/FilesSearch';
// import withAuth from './admin/dashboard/withAuth';
import DefaultLayout from './layouts/default/DefaultLayout';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import NoMatch from './NoMatch';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          {/* <Header /> */}
          {/* <Sidebar /> */}
          <Switch>
            <DefaultLayout path="/" exact component={HomePage} />
            <DefaultLayout path="/search" exact component={Search} />
            <DefaultLayout path="/register" component={RegisterPage} />
            <DefaultLayout path="/login" component={LoginPage} />
            <DashboardLayout path="/dashboard" exact component={Dashboard} />
            <DashboardLayout path="/files/new" exact component={FileCreate} />
            <DashboardLayout path="/files/:id" exact component={FileShow} />
            <DashboardLayout
              path="/files/delete/:id"
              exact
              component={FileDelete}
            />
            <DashboardLayout
              path="/files/edit/:id"
              exact
              component={FileEdit}
            />
            <DefaultLayout component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
