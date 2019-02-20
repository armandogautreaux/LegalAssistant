import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Link to="/login">Login</Link>
        <h1>WELCOME TO GYG</h1>
      </div>
    );
  }
}

export default HomePage;
