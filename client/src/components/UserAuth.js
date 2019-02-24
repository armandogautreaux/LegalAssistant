import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut, signIn } from '../actions';

class UserAuth extends React.Component {
  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButtons() {
    if (this.props.isSignedIn) {
      return (
        <div className="ui buttons">
          <button className="ui button black" onClick={this.onSignOutClick}>
            <i className="sign-in icon" />
            Salir
          </button>
        </div>
      );
    } else {
      return (
        <div className="ui buttons">
          <Link className="ui button black" to="/login">
            <i className="sign-in icon" />
            Ingresar
          </Link>
          <div className="or" />
          <Link to="/register" className="ui button green">
            <i className="users icon" />
            Registrar
          </Link>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButtons()}</div>;
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signOut, signIn }
)(UserAuth);
