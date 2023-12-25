import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Lazy Loading</h1>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
