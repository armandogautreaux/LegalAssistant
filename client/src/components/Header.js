import React from 'react';
import { Link } from 'react-router-dom';
// import UserAuth from './UserAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        GYG
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All files
        </Link>
        {/* <UserAuth /> */}
      </div>
    </div>
  );
};

export default Header;
