// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, withRouter } from 'react-router-dom';
// import Results from '../components/Results';
// // import qs from 'query-string';

// class SearchLink extends React.Component {
//   render() {
//     console.log(`/results?${this.props.formValues.search}`);
//     // let searchString = qs.stringify(this.props.formValues);
//     return (
//       <Route
//         path={`/results?${this.props.formValues.search}`}
//         component={Results}
//       />
//     );
//   }
// }
// const RoutesWithRouter = withRouter(SearchLink);
// console.log(RoutesWithRouter);

// const Routes = ({ location }) => {
//   const parsed = queryString.parse(location.search);
//   const target = itemsObj.find(o => o.search === parsed.tbm);
//   return (
//     <Route path={`/search`} component={target ? target.component : First} />
//   );
// };

// const mapStateToProps = state => {
//   return { formValues: state.files };
// };
// export default connect(mapStateToProps)(RoutesWithRouter);

// const itemsObj = [
//   { title: 'First', search: 'first', component: First },
//   { title: 'Second', search: 'second', component: Second },
//   { title: 'Third', search: 'third', component: Third }
// ];

// const Routes = ({ location }) => {
//   let params = queryString.parse(location.search);
//   return itemsObj.map((e, i) => {
//     return <Route path={`/${e.search}`} key={i} />;
//   });
// };

// const RoutesWithRouter = withRouter(Routes);

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <RoutesWithRouter component={streams} />
//       </div>
//     </Router>
//   );
// }
