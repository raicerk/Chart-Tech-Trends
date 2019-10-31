import React, { useContext, useState, useEffect } from 'react';

import CompGraficos from './CompGraficoLinea';
import CompGraficoPie from './CompGraficoPie';
import CompGraficoBarra from './CompGraficoBarra';
import CompGraficoBarraHorizontal from './CompGraficoBarraHorizontal';

const CommonSection = ({ name, procesadoAcumulado, procesadoPorMes, procesadoSalarios }) => {
  return (
    <div className="section">
      <h2 className="section__title">{name}</h2>
      <h3 className="section__subtitle">Ocurrencias</h3>
      <CompGraficoPie data={procesadoAcumulado} />
      <h3 className="section__subtitle">Tendencias</h3>
      <CompGraficos data={procesadoPorMes} />
      <h3 className="section__subtitle">Salarios Promedios</h3>
      <CompGraficoBarra data={procesadoSalarios} />
    </div>
  );
};

export default CommonSection;
