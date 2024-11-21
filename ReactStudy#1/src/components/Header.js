import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Main</Link>
        <Link to="/page1" style={linkStyle}>Page1</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '10px 0',
  color: 'white',
  textAlign: 'center',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};

export default Header;
