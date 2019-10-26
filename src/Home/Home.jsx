import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">Tendencias Tecnológicas Laborales <span className="home-title__special">0.1</span></h1>
        <p className="home__text">Sitio de estadísticas laborales tecnológicas obtenidas desde las ofertas laborales vigentes y publicadas por compañías en 5 países.</p>
        <p className="home__extra-text">* Aclaratoria: Las gráficas a continuación están basadas en información recolectada a partir de Mayo del 2018.</p>
      </div>
    </div>
  );
}

export default Home;
