import React from 'react';
import { connect } from 'react-redux';
import { fetchFile } from '../../actions';

class FileShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchFile(id);
  }
  render() {
    if (!this.props.file) {
      return <div>Loading</div>;
    }
    const { client } = this.props.file;
    return (
      <div>
        <h1>{client}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { file: state.files[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchFile }
)(FileShow);
