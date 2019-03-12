import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFiles } from '../../../actions';
import { Grid } from 'semantic-ui-react';
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
      <Grid padded>
        <MainBoard />
        <div>
          <div className="ui celled list">{this.renderList()}</div>
        </div>
      </Grid>
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
