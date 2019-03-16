import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut, signIn } from '../../../actions';
import { Menu, Button } from 'semantic-ui-react';

class LoginLogoutButtons extends React.Component {
  // onSignInClick = () => {
  //   this.auth.signIn();
  // };

  onSignOutClick = () => {
    this.props.signOut();
  };
  // onAuthChange = isSignedIn => {
  //   if (isSignedIn) {
  //     this.props.signIn(this.auth.currentUser.get().getId());
  //   } else {
  //     this.props.signOut();
  //   }
  // };

  // renderAuthButton() {
  //   if (this.props.isSignedIn === null) {
  //     return null;
  //   } else if (this.props.isSignedIn) {
  //     return (
  //       <button onClick={this.onSignOutClick} className="ui red google button">
  //         <i className="google icon" /> Sign Out
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button onClick={this.onSignInClick} className="ui red google button">
  //         <i className="google icon" />
  //         Sign In with Google
  //       </button>
  //     );
  //   }
  // }
  // render() {
  //   return <div>{this.renderAuthButton()}</div>;
  // }

  renderLoginOrLogoutButtons() {
    if (this.props.isSignedIn) {
      return (
        <React.Fragment>
          <Menu.Item className="ui button black" onClick={this.onSignOutClick}>
            Salir
          </Menu.Item>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Menu.Item
            as={Link}
            to="/register"
            name="register"
            active={this.props.activeItem === 'register'}
            onClick={this.props.handleActive}
          >
            <Button primary>Registrate</Button>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            active={this.props.activeItem === 'login'}
            onClick={this.props.handleActive}
          >
            <Button>Iniciar Session</Button>
          </Menu.Item>
        </React.Fragment>
      );
    }
  }
  render() {
    return <React.Fragment>{this.renderLoginOrLogoutButtons()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    activeItem: state.event.activeMenuItem
  };
};

export default connect(
  mapStateToProps,
  { signOut, signIn }
)(LoginLogoutButtons);
