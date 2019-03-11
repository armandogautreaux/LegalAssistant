import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut, signIn, handleItemClickMenu } from '../../actions';
import { Menu, Button, Icon } from 'semantic-ui-react';

class MenuItems extends React.Component {
  onNameChange = (e, { name }) => {
    this.props.handleItemClickMenu(name);
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
            <Button animated>
              <Button.Content visible>Registrar Despacho</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            active={this.props.activeItem === 'login'}
            onClick={this.onNameChange}
          >
            <Button primary>Ingresar</Button>
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
  return {
    isSignedIn: state.auth.isSignedIn,
    activeItem: state.event.activeMenuItem
  };
};

export default connect(
  mapStateToProps,
  { handleItemClickMenu, signOut, signIn }
)(MenuItems);
