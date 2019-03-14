import '../dashboard/elements/MainBoard.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFiles } from '../../../actions';
import { Grid, GridColumn } from 'semantic-ui-react';
import MainBoard from './elements/MainBoard';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchFiles();
  }

  renderAdmin(file) {
    if (file.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/files/edit/${file._id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/files/delete/${file._id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.files.map(file => {
      return (
        <div className="item" key={file._id}>
          {this.renderAdmin(file)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/files/${file._id}`}>{file.fileNumber}</Link>
            <div className="description">{file.summary}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid.Column mobile={16} tablet={13} computer={14} floated="right">
          <Grid padded>
            <MainBoard />
            <Grid.Row>
              <div>
                <div className="ui celled list">{this.renderList()}</div>
              </div>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    files: Object.values(state.files),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchFiles }
)(Dashboard);
