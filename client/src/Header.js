import React from 'react';
import { Link } from 'react-router-dom';
import UserAuth from './components/UserAuth';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu stackable>
      <Menu.Item as={Link} to="/" name="home">
        Asistente Legal
      </Menu.Item>
      <Menu.Menu position="right">
        <UserAuth />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
