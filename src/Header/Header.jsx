import React, { useEffect, useState } from 'react';
import Paises from './Paises';

import './Header.scss';

function Header() {
  const [extraClass, setExtraClass] = useState('no-header')

  const handleScroll = () => {
    const offset = 440;
    const windowsScrollTop  = window.pageYOffset;

    setExtraClass(windowsScrollTop >= offset ? 'show-header' : 'no-header')
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
      <Paises />
    </header>
  );
}

export default Header;
