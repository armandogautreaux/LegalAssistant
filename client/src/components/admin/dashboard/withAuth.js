import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import LoginPage from '../loginPage/LoginPage';
import { getUser } from '../../../actions';

class withAuth extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    if (this.props.isSignedIn) {
      return <Dashboard />;
    }
    return <LoginPage />;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(withAuth);
