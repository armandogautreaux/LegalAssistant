// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import history from '../history';

// const withAuth = ComponentToProtect => {
//   return class extends Component {
//     render() {
//       if (this.props.isSignedIn) {
//         return (
//           <React.Fragment>
//             <ComponentToProtect {...this.props} />
//           </React.Fragment>
//         );
//       } else {
//         return history.push('/login');
//       }
//     }
//   };
// };
// const mapStateToProps = state => {
//   return {
//     isSignedIn: state.auth.isSignedIn
//   };
// };

// // export default withAuth

// export default connect(
//   mapStateToProps,
//   null
// )(withAuth);
