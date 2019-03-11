import React from 'react';
import { fetchSearch, resetSearch } from '../../actions';
import { connect } from 'react-redux';

class FilesSearch extends React.Component {
  componentDidMount() {
    this.props.fetchSearch(this.props.location.search);
  }
  componentDidUpdate(prevProps) {
    let oldlocation = prevProps.location.search;
    let newlocation = this.props.location.search;
    if (oldlocation !== newlocation) {
      this.props.fetchSearch(newlocation);
    }
  }
  componentWillUnmount() {
    // allows us to ignore an inflight request in scenario 4
    this.props.resetSearch();
  }
  render() {
    // } //   return <div>hello</div>; //  {
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
  // console.log(state.files);
  return { files: state.search.response };
};

export default connect(
  mapStateToProps,
  { fetchSearch, resetSearch }
)(FilesSearch);
