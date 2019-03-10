import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut, signIn, handleItemClick } from '../actions';
import { Menu } from 'semantic-ui-react';

class UserAuth extends React.Component {
  onNameChange = (e, { name }) => {
    this.props.handleItemClick(name);
  };
  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButtons() {
    if (this.props.isSignedIn) {
      return (
        <React.Fragment>
          <Menu.Item
            as={Link}
            to="/dashboard"
            name="home"
            active={this.props.activeItem === 'home'}
            onClick={this.onNameChange}
          >
            Inicio
          </Menu.Item>
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
            to="/"
            name="home"
            active={this.props.activeItem === 'home'}
            onClick={this.onNameChange}
          >
            Inicio
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/register"
            name="register"
            active={this.props.activeItem === 'register'}
            onClick={this.onNameChange}
          >
            Registrar
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            active={this.props.activeItem === 'login'}
            onClick={this.onNameChange}
          >
            Ingresar
          </Menu.Item>
        </React.Fragment>
      );
    }
  }
  render() {
    return <React.Fragment>{this.renderAuthButtons()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  console.log(state.event.activeItem);
  return {
    isSignedIn: state.auth.isSignedIn,
    activeItem: state.event.activeItem
  };
};

export default connect(
  mapStateToProps,
  { handleItemClick, signOut, signIn }
)(UserAuth);
