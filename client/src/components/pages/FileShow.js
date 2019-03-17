import React from 'react';
import { connect } from 'react-redux';
import DefaultTemplate from '../templates/DefaultTemplate';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';
import FileShowContainer from '../organisms/files/FileShowContainer';
import { fetchFile } from '../../actions';

class FileShow extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchFile(this.props.match.params.id);
  }
  render() {
    const file = this.props.file;
    return (
      <DefaultTemplate header={<Header />} footer={<Footer />}>
        <FileShowContainer file={file} />
      </DefaultTemplate>
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
