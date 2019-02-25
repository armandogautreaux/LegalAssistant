import React from 'react';
import { fetchSearch } from '../actions';
import { connect } from 'react-redux';

class Results extends React.Component {
  componentDidMount() {
    this.props.fetchSearch(this.props.location.search);
  }
  render() {
    if (!this.props.files) {
      return <div>Loading</div>;
    }
    const { client, fileNumber } = this.props.files;
    return (
      <div>
        <h1>{client}</h1>
        <h5>{fileNumber}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { files: state.files[0] };
};

export default connect(
  mapStateToProps,
  { fetchSearch }
)(Results);
