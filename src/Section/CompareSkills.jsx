import React, { useContext, useState, useEffect } from 'react';

import { MultipleSelect } from "react-select-material-ui";
import CommonSection from './CommonSection';

import skillsData from '../data';

const CompareSection = ({ skills, onChange, procesadoAcumulado, procesadoPorMes, procesadoSalarios }) => {

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
      />

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
