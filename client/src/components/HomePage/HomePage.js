import React from 'react';
import SearchForm from '../forms/SearchForm';
import history from '../../history';
import qs from 'query-string';

class HomePage extends React.Component {
  onSubmit = formValues => {
    const searchString = qs.stringify(formValues);
    history.push(`/search?${searchString}`);
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

export default HomePage;
