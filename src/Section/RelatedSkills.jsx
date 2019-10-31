import React, { useContext, useState, useEffect } from 'react';

import { SingleSelect } from "react-select-material-ui";

import CompGraficoBarraHorizontal from './CompGraficoBarraHorizontal';

import api from '../api';
import skillsData from '../data';

import AppContext from '../AppContext';

const RelatedSkills = () => {
  const context = useContext(AppContext);
  const skills = skillsData.all.skills;
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState(skills[0]);

  useEffect(() => {
    api.otroSkill(context.pais, skill).then(data => {
      setData(data);
    });

  }, [context.pais, skill]);

  return (
    <div className="section">
      <h2 className="section__title">Skills Relacionadas</h2>
      <p>Esta funcionalidad te permitirá elegir un skill y ver cuales otros skill son requeridos en conjunto con el seleccionado,
        en el gráfico se refleja los skill complementarios que necesitas aprender o tener noción y que solicitan las compañías en
        las ofertas laborales:</p>

      <SingleSelect
        placeholder="Selecciona una skill"
        helperText="Selecciona una skill para ver otras skill relacionadas"
        defaultValue={skill}
        options={skills}
        onChange={(skill) => setSkill(skill)}
        style={{ width: 320 }}
      />
      <CompGraficoBarraHorizontal data={data} />
    </div>
  );
};

export default RelatedSkills;
