import React from 'react';

import { MultipleSelect } from "react-select-material-ui";
import CommonSection from './CommonSection';

import skillsData from '../data';
import './CompareSkills.scss';

const CompareSection = ({ skills, onChange, procesadoAcumulado, procesadoPorMes, procesadoSalarios }) => {
  const definedDatasets = [
    skillsData.languages,
    skillsData.database,
    skillsData.js,
    skillsData.cloud,
    skillsData.mobile
  ];

  const presetData = definedDatasets.map(dataset => (
    <div
    key={dataset.name}
    className="compare-skills__preset"
    onClick={() => onChange(dataset.skills)}
    >
      {dataset.name}
    </div>
  ));

  return (
    <div className="section">
      <h2 className="section__title">Comparar</h2>
      <p>Estás gráficas no te ayudan mucho porque quieres comparar algo en especial?</p>

      <MultipleSelect
        options={skillsData.all.skills}
        values={skills}
        onChange={onChange}
        helperText="Selecciona uno a uno, la lista de Skills que deseas comparar"
        SelectProps={{
          isCreatable: false,
          msgNoOptionsAvailable: "Todas las opciones han sido seleccionadas.=",
          msgNoOptionsMatchFilter: "Ningún skills reconocido"
        }}
        className='class__option'
      />

      <h3 className="section__subtitle">Sugerencias de Búsqueda</h3>
      {presetData}

      {skills.length > 0 && (
        <CommonSection
          className='no-section'
          procesadoAcumulado={procesadoAcumulado}
          procesadoPorMes={procesadoPorMes}
          procesadoSalarios={procesadoSalarios}
        />
      )}
    </div>
  );
};

export default CompareSection;
