import React from 'react';

import CompGraficos from './CompGraficoLinea';
import CompGraficoPie from './CompGraficoPie';
import CompGraficoBarra from './CompGraficoBarra';

const CommonSection = ({ name, className, procesadoAcumulado, procesadoPorMes, procesadoSalarios }) => {
  const acumuladoHasData = procesadoAcumulado && procesadoAcumulado.length;
  const mesHasData = procesadoPorMes && procesadoPorMes.length;
  const salariosHasData = procesadoSalarios && procesadoSalarios.length;

  return (
    <div className={className || 'section'}>
      {name && <h2 className="section__title">{name}</h2>}
      {acumuladoHasData ? (
        <>
          <h3 className="section__subtitle">Ocurrencias</h3>
          <CompGraficoPie data={procesadoAcumulado} />
        </>
      ): null}
      {mesHasData ? (
        <>
          <h3 className="section__subtitle">Tendencias</h3>
          <CompGraficos data={procesadoPorMes} />
        </>
      ): null}
      {salariosHasData ? (
        <>
          <h3 className="section__subtitle">Salarios Promedios</h3>
          <CompGraficoBarra data={procesadoSalarios} />
        </>
      ): null}
    </div>
  );
};

export default CommonSection;
