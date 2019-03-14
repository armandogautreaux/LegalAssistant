// import React, { useEffect } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Header from '../default/Header';
// import Sidebar from './Sidebar';
// import { getUser } from '../../../actions';
// import { Grid } from 'semantic-ui-react';

// const DashboardLayout = ({
//   component: Component,
//   getUser,
//   isSignedIn,
//   ...rest
// }) => {
//   useEffect(() => {
//     getUser();
//   }, []);

//   return (
//     <Route
//       {...rest}
//       component={matchProps =>
//         isSignedIn === true ? (
//           <Grid padded>
//             <React.Fragment>
//               <Sidebar />
//               <Header />
//             </React.Fragment>
//             <React.Fragment>
//               <Component {...matchProps} />
//             </React.Fragment>
//           </Grid>
//         ) : (
//           <Redirect to={{ pathname: '/login' }} />
//         )
//       }
//     />
//   );
// };
// const mapStateToProps = state => {
//   return {
//     isSignedIn: state.auth.isSignedIn
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getUser }
// )(DashboardLayout);

//HOOKING 2 DELAYOUTS
import './DashboardLayout.css';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DefaultLayout from '../default/DefaultLayout';
import Sidebar from './Sidebar';
import { getUser } from '../../../actions';
import { Grid } from 'semantic-ui-react';
// import { Grid } from 'semantic-ui-react';

const DashboardLayout = ({
  component: Component,
  getUser,
  isSignedIn,
  ...rest
}) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <DefaultLayout
      {...rest}
      component={matchProps =>
        isSignedIn === true ? (
          <div>
            <Grid padded divided>
              <Sidebar />
              <React.Fragment>
                <Component {...matchProps} />
              </React.Fragment>
            </Grid>
          </div>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(DashboardLayout);
