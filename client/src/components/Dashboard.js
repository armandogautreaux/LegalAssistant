import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFiles } from '../actions';
import UserAuth from './UserAuth';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchFiles();
  }
  renderList() {
    console.log(this.props.files);
    return this.props.files.map(file => {
      console.log(file);
      return (
        <div className="item" key={file._id}>
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
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchFiles }
)(Dashboard);
