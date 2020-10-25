import React, { useContext, useState, useEffect } from 'react';

import CommonSection from './CommonSection';
import RelatedSkills from './RelatedSkills';
import CompareSkills from './CompareSkills';

import api from '../api';
import skillsData from '../data';

import AppContext from '../AppContext';

import './Section.scss';

//-----------------------------------------------------------
//-------------- Definición de Grupos de Datos --------------
//-----------------------------------------------------------
const definedDatasets = [
  skillsData.languages,
  skillsData.database,
  skillsData.js,
  skillsData.cloud,
  skillsData.mobile
];

const traducirAcumulado = iter => ({id: iter.skill, value: iter.cantidad});

const traducirAgrupadoPorMes = iter => ({
  id: iter.skill,
  data: iter.datos.sort().map(i => {
    const fec = i.fecha.split("-");
    return {
      x: `${fec[0]}-${fec[1]}-${new Date(fec[0], fec[1], 0).getDate()}`,
      y: i.cantidad
    };
  })
});

const procesarDataAcumulados = (data, elements) => {
  return data.filter(iter => elements.includes(iter.skill)).map(iter => traducirAcumulado(iter));
};

const procesarDataSalarios = (data, elements) => {
  return data.filter(iter => elements.includes(iter.skill));
};

const procesarDataAgrupadosPorMes = (data, elements) => {
  return data.filter(iter => elements.includes(iter.skill)).map(iter => traducirAgrupadoPorMes(iter));
};

const Section = () => {
  const context = useContext(AppContext);

  const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([]);
  const [dataAcumulado, setDataAcumulado] = useState([]);
  const [dataSalario, setDataSalario] = useState([]);
  const [customSkills, setCustomsSkills] = useState([]);

  const handleChange = (values) => {
    setCustomsSkills(values);
  };

  useEffect(() => {
    //Agrupado por mes
    api.agrupadoPorMes(context.pais).then(data => {
      setDataAgrupadoPorMes(data);
    });

    //Acumulado
    api.acumulado(context.pais).then(data => {
      setDataAcumulado(data);
    });

    //Salarios
    api.salarios(context.pais).then(data => {
      setDataSalario(data);
    });
  }, [context.pais]);

  const acumuladoHasData = dataAcumulado && dataAcumulado.length;
  const mesHasData = dataAgrupadoPorMes && dataAgrupadoPorMes.length;
  const salariosHasData = dataSalario && dataSalario.length;
  const atLeastOneHasData = acumuladoHasData || mesHasData || salariosHasData;

  if (!atLeastOneHasData) {
    return (
      <div className="section__error">
        <h4>Ocurrió un Error</h4>
        <p>
          Lo sentimos. Por una extraña razón no podemos encontrar información en los servidores. Si quieres puedes intentarlo nuevamente. Si el problema persiste por favor comunicate con nosotros.
        </p>
      </div>
    );
  }

  return (
    <div className="contenido">
      <article>
        <RelatedSkills />

        { definedDatasets.map(set => (
          <CommonSection
            key={set.name}
            name={set.name}
            procesadoAcumulado={procesarDataAcumulados(dataAcumulado, set.skills)}
            procesadoPorMes={procesarDataAgrupadosPorMes(dataAgrupadoPorMes, set.skills)}
            procesadoSalarios={procesarDataSalarios(dataSalario, set.skills)}
          />
        ))}

        <CompareSkills
          skills={customSkills}
          onChange={handleChange}
          procesadoAcumulado={procesarDataAcumulados(dataAcumulado, customSkills)}
          procesadoPorMes={procesarDataAgrupadosPorMes(dataAgrupadoPorMes, customSkills)}
          procesadoSalarios={procesarDataSalarios(dataSalario, customSkills)}
        />
      </article>
    </div>
  );
};

export default Section;
