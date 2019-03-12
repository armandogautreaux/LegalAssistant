import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DefaultLayout from '../default/DefaultLayout';
import Sidebar from './Sidebar';
import { getUser } from '../../../actions';

const DashboardLayout = ({
  component: Component,
  getUser,
  isSignedIn,
  ...rest
}) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <DefaultLayout
      {...rest}
      component={matchProps =>
        isSignedIn === true ? (
          <div className="dashboard">
            <div className="dashboard-content">
              <Component {...matchProps} />
            </div>
            <div className="sidebar">
              <Sidebar />
            </div>
          </div>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(DashboardLayout);
