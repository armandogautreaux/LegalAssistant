import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <Header />
          <Component {...matchProps} />
          <div className="Footer">Footer</div>
        </div>
      )}
    />
  );
};

export default DefaultLayout;
