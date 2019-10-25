import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__resources">
        <li>Chequear el Código de FrontEnd en <a href="https://github.com/raicerk/Chart-Tech-Trends" target="_blank" rel="noopener noreferrer">Chart-Tech-Trends</a></li>
        <li>Chequear el Código de Backend en <a href="https://github.com/pgramadores/LaboralGraphQL" target="_blank" rel="noopener noreferrer">LaboralGraphQL</a></li>
        <li>Proyecto de <a href="https://github.com/raicerk">Juan Mora</a></li>
      </ul>     
    </div>
  );
}

export default Footer;
