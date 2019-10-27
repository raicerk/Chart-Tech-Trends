import React from 'react';

import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <h2 className="home__title">
          Tech
          <span className="home-title__second">Trends</span>
          <span className="home-title__special"> beta</span>
        </h2>
        <p className="home__text">Sitio de estadísticas laborales tecnológicas obtenidas desde las ofertas laborales vigentes y publicadas por compañías en 5 países.</p>
        <p className="home__extra-text">* Aclaratoria: Las gráficas a continuación están basadas en información recolectada a partir de Mayo del 2018.</p>
      </div>
    </div>
  );
}

export default Home;
