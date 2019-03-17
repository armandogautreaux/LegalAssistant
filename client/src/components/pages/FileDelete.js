import React from 'react';
import { fetchFile } from '../../actions';
import { connect } from 'react-redux';
import DefaultTemplate from '../templates/DefaultTemplate';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';
import FileDeleteModal from '../organisms/files/FileDeleteModal';

class FileDelete extends React.Component {
  componentDidMount() {
    this.props.fetchFile(this.props.match.params.id);
  }
  render() {
    const file = this.props.file;
    return (
      <DefaultTemplate header={<Header />} footer={<Footer />}>
        <FileDeleteModal file={file} />
      </DefaultTemplate>
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
  { fetchFile }
)(FileDelete);
