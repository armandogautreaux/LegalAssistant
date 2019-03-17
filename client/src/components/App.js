import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
// import FileShow from './files/FileShow';
// import FileCreate from './files/FileCreate';
// import FileEdit from './files/FileEdit';
// import FileDelete from './files/FileDelete';
// import Search from './files/FilesSearch';
// import withAuth from './admin/dashboard/withAuth';
import DefaultLayout from './layouts/default/DefaultLayout';
// import DashboardLayout from './layouts/dashboard/DashboardLayout';
import PrivateRoute from './organisms/privateRoute/PrivateRoute';
import NoMatch from './NoMatch';
import history from '../history';
import HomePage from '../components/pages/HomePage';
import UserRegisterPage from './pages/UserRegisterPage';
import UserLoginPage from './pages/UserLoginPage';
import Dashboard from './pages/Dashboard';
import FileCreate from './pages/FileCreate';
import SearchResults from './pages/SearchResults';
import FileShow from './pages/FileShow';
import FileEdit from './pages/FileEdit';
import FileDelete from './pages/FileDelete';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" exact component={UserRegisterPage} />
            <Route path="/login" exact component={UserLoginPage} />
            <Route path="/search" exact component={SearchResults} />
            {/* <DefaultLayout path="/search" exact component={Search} /> */}
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/files/new" exact component={FileCreate} />
            <PrivateRoute path="/files/:id" exact component={FileShow} />
            <PrivateRoute path="/files/edit/:id" exact component={FileEdit} />
            <PrivateRoute
              path="/files/delete/:id"
              exact
              component={FileDelete}
            />
            {/*
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
            /> */}
            {/* <Route path="/page" exact component={homepage} /> */}
            <DefaultLayout component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
