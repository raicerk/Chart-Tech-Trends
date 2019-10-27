import React, { useEffect, useState } from 'react';
import CompPaises from '../CompPaises';

import './Header.css';

function Header() {
  const [extraClass, setExtraClass] = useState('no-header')

  const handleScroll = () => {
    const offset = 500;
    const windowsScrollTop  = window.pageYOffset;

    setExtraClass(windowsScrollTop >= offset ? '' : 'no-header')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return window.addEventListener('scroll', handleScroll);
  })

  return (
    <header className={`header ${extraClass}`}>
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
