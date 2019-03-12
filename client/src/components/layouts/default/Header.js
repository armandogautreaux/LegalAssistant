import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu size="small">
      <Menu.Item as={Link} to="/" name="home">
        Asistente Legal
      </Menu.Item>
      <Menu.Menu position="right">
        <MenuItems />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
