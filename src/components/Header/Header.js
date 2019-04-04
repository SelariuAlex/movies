import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <h1>See the most popular movies</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
