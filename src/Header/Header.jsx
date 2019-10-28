import React, { useEffect, useState, useContext } from 'react';
import Paises from './Paises';
import AppContext from '../AppContext'
import api from '../api';

import './Header.scss';

function Header() {
  const context = useContext(AppContext)
  const [extraClass, setExtraClass] = useState('no-header')
  const [dataCantidadSkill, setCantidadSkill] = useState(0)
  const [dataCantidadOfertas, setCantidadOfertas] = useState(0)

  const handleScroll = () => {
    const offset = 440;
    const windowsScrollTop = window.pageYOffset;

    setExtraClass(windowsScrollTop >= offset ? 'show-header' : 'no-header')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return window.addEventListener('scroll', handleScroll);
  })

  useEffect(() => {

    api.cantidadOfertas(context.pais).then(data => {
      setCantidadOfertas(data)
    })

    api.cantidadSkills(context.pais).then(data => {
      setCantidadSkill(data)
    })

  }, [context.pais])

  return (
    <header className={`header ${extraClass}`}>

      <h1 className="header__title">
        Tech
        <span className='header-title__second'>Trends</span>
        <span className="header-title__special"> beta</span>
      </h1>
      <span className='header-datatrend'>Cantidad de ofertas: {dataCantidadOfertas}</span>
      <span className='header-datatrend'>Cantidad de skill: {dataCantidadSkill}</span>
      <Paises />
    </header>
  );
}

export default Header;
