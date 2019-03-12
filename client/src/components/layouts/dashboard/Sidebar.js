import './Sidebar.css';
import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { handleItemClickSidebar } from '../../../actions';
import { Grid, Menu } from 'semantic-ui-react';

class Sidebar extends React.Component {
  onNameChange = (e, { name }) => {
    this.props.handleItemClickSidebar(name);
  };

  render() {
    return (
      <Grid.Column tablet={3} computer={3} only="tablet computer" id="sidebar">
        <Menu vertical borderless fluid text>
          <Menu.Item
            as="a"
            name="overview"
            active={this.props.activeItem === 'overview'}
            onClick={this.onNameChange}
          >
            Overview
          </Menu.Item>
          <Menu.Item
            as="a"
            name="reports"
            active={this.props.activeItem === 'reports'}
            onClick={this.onNameChange}
          >
            Reports
          </Menu.Item>
          <Menu.Item
            as="a"
            name="analytics"
            active={this.props.activeItem === 'analytics'}
            onClick={this.onNameChange}
          >
            Analytics
          </Menu.Item>
          <Menu.Item
            as="a"
            name="export"
            active={this.props.activeItem === 'export'}
            onClick={this.onNameChange}
          >
            Export
          </Menu.Item>
        </Menu>
      </Grid.Column>
    );
  }
}
const mapStateToProps = state => {
  return {
    activeItem: state.event.activeSidebarItem
  };
};

export default connect(
  mapStateToProps,
  { handleItemClickSidebar }
)(Sidebar);
