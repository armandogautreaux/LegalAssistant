import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFiles, getUser } from '../actions';
import UserAuth from './UserAuth';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getUser();
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
    console.log(this.props.files);
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
      <div>
        <UserAuth />
        <h2>Dashboard</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    files: Object.values(state.files),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchFiles, getUser }
)(Dashboard);
