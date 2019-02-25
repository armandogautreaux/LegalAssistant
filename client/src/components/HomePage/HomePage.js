import React from 'react';
import SearchForm from '../forms/SearchForm';
import history from '../../history';
// import { searchFile } from '../../actions';
// import { connect } from 'react-redux';
import qs from 'query-string';

class HomePage extends React.Component {
  onSubmit = formValues => {
    const searchString = qs.stringify(formValues);
    history.push(`/search?${searchString}`);
  };

  // handleClick = comment => event => {
  //   const searchString = qs.stringify(formValues);
  //   const {query, comment} = someThingParseQueryString(this.props.location.search)
  //   this.history.push(`/serach?q=${query}&isComment=${comment}`}
  // }
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
// export default connect(
//   null,
//   { searchFile }
// )(HomePage);
