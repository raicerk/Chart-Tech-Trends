import React from 'react';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__resources">
        <li>Foto de <a href="https://unsplash.com/@ffstop?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Fotis Fotopoulos</a> descargada de <a href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></li>
        <li>Código del sitio Web React en <a href="https://github.com/raicerk/Chart-Tech-Trends" target="_blank" rel="noopener noreferrer">Chart-Tech-Trends</a></li>
        <li>Código de API GraphQL en <a href="https://github.com/raicerk/GraphQL-Laboral" target="_blank" rel="noopener noreferrer">GraphQL-Laboral</a></li>
        <li>Wikipedia <a href="https://es.wikipedia.org/wiki/Valor_at%C3%ADpico" target="_blank" rel="noopener noreferrer">Valor atípico (outlier)</a></li>
        <li>Proyecto de <a href="https://github.com/raicerk" target="_blank" rel="noopener noreferrer">Juan Mora</a></li>
      </ul>     
    </div>
  );
}

export default Footer;
