import React, { Component } from 'react';
import CompPaises from '../CompPaises';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Tech
        <span className='header-title__second'>Trends</span>
        <span className="header-title__special"> beta</span>
      </h1>
      <CompPaises />
    </header>
  );
}

export default Header;
