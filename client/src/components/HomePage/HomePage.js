import React from 'react';
import SearchForm from '../forms/SearchForm';
import { searchFile } from '../../actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  onSubmit = formValues => {
    this.props.searchFile(formValues);
  };
  render() {
    return (
      <div className="ui container">
        <h3>Search for a file</h3>
        <SearchForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { searchFile }
)(HomePage);
