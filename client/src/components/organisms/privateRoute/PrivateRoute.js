import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleOnLoadingComponent } from '../../../actions';
import history from '../../../history';

const PrivateRoute = ({
  component: Component,
  isLoading,
  handleOnLoadingComponent,
  isSignedIn,
  ...rest
}) => {
  useEffect(() => {
    if (isSignedIn === false || isSignedIn === null) {
      history.push('/dashboard');
    }
    handleOnLoadingComponent();
  }, []);
  return (
    <Route
      {...rest}
      component={matchProps =>
        isLoading === true ? (
          <div>LOADING....</div>
        ) : (
          <Component {...matchProps} />
        )
      }
    />
  );
};
const mapStateToProps = state => {
  return {
    isLoading: state.auth.isloading,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { handleOnLoadingComponent }
)(PrivateRoute);
