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
      <Grid.Column
        mobile={16}
        tablet={13}
        computer={13}
        floated="right"
        id="content"
      >
        <Grid padded>
          <Grid.Row>
            <Header dividing size="huge" as="h1">
              Dashboard
            </Header>
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Grid.Column mobile={8} tablet={4} computer={4}>
              {this.renderCreate()}
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4}>
              {this.renderCreate()}
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4}>
              {this.renderCreate()}
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4}>
              {this.renderCreate()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(MainBoard);
