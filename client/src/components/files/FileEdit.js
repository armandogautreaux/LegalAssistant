import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchFile, editFile } from '../../actions';
import FileForm from '../forms/FileForm';

class FileEdit extends React.Component {
  componentDidMount() {
    this.props.fetchFile(this.props.match.params.id);
  }
  onSubmit = formValues => {
    this.props.editFile(this.props.match.params.id, formValues);
  };
  render() {
    console.log(this.props);
    if (!this.props.file) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a File</h3>
        <FileForm
          initialValues={_.pick(
            this.props.file,
            'fileNumber',
            'client',
            'defendant',
            'nextHearing',
            'caseStatus',
            'summary'
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    file: state.files[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { fetchFile, editFile }
)(FileEdit);
