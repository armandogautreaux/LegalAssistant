import './MainBoard.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';

class MainBoard extends React.Component {
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/files/new" className="ui button primary">
            Create File
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <Grid.Row id="content">
          <Header dividing size="huge" as="h1">
            Dashboard
          </Header>
          {this.renderCreate()}
        </Grid.Row>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(MainBoard);
