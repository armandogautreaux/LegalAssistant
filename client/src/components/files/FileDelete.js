import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFile, deleteFile } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class FileDelete extends React.Component {
  componentDidMount() {
    this.props.fetchFile(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteFile(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/dashboard" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.file) {
      return 'Are you sure you want to delete this file?';
    }
    return `Are you sure you want to delete this file with tittle: ${
      this.props.file.client
    }`;
  }
  render() {
    return (
      <Modal
        tittle="Delete File"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/dashboard')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { file: state.files[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchFile, deleteFile }
)(FileDelete);
