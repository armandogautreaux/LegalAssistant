import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage/LoginPage';

const withAuth = props => {
  if (props.isSignedIn) {
    return <Dashboard />;
  }
  return <LoginPage />;
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(withAuth);
