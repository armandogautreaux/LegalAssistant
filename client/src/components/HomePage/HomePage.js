import React from 'react';
// import { Link } from 'react-router-dom';
import { signOut } from '../../actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  onSignOutClick = () => {
    this.props.signOut();
  };
  render() {
    return (
      <div className="ui container">
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" /> Sign Out
        </button>
        <h1>Hi</h1>
        <p>You are logged in with React</p>
        <h3>All registered users:</h3>
        {/* <Link to="/login">Logout</Link> */}
      </div>
    );
  }
}

export default connect(
  null,
  { signOut }
)(HomePage);
