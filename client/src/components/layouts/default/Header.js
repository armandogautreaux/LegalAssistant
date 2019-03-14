import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import { Menu, Grid, Icon, Input } from 'semantic-ui-react';

const Header = () => {
  return (
    <Grid padded>
      <Menu size="small" borderless fluid>
        <Menu.Item header as={Link} to="/" name="home">
          <Icon name="balance scale" />
          Asistente Legal
        </Menu.Item>
        <Menu.Item>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Menu position="right">
          <MenuItems />
        </Menu.Menu>
      </Menu>
    </Grid>
  );
};

export default Header;
