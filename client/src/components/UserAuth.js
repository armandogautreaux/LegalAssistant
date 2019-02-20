import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';

class UserAuth extends React.Component {
  onSignOutClick = () => {
    this.props.signOut();
  };

  render() {
    return (
      <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon" /> Sign out
      </button>
    );
  }
}

export default connect(
  null,
  { signOut }
)(UserAuth);
