import React, { useContext, useState, useEffect } from 'react';

import CompGraficos from './CompGraficoLinea';
import CompGraficoPie from './CompGraficoPie';
import CompGraficoBarra from './CompGraficoBarra';
import CompGraficoBarraHorizontal from './CompGraficoBarraHorizontal';
import RelatedSkills from './RelatedSkills';

import api from '../api';
import AppContext from '../AppContext'

import './Section.scss'

const traducirAcumulado = iter => ({id: iter.skill, value: iter.cantidad})

const traducirAgrupadoPorMes = iter => ({
  id: iter.skill,
  data: iter.datos.sort().map(i => {
    let fec = i.fecha.split("-")
    return {
      x: `${fec[0]}-${fec[1]}-${new Date(fec[0], fec[1], 0).getDate()}`,
      y: i.cantidad
    }
  })
})

const procesarDataAcumulados = (data, elements) => {
  return data.filter(iter => elements.includes(iter.skill)).map(iter => traducirAcumulado(iter))
}

const procesarDataSalarios = (data, elements) => {
  return data.filter(iter => elements.includes(iter.skill))
}

const procesarDataAgrupadosPorMes = (data, elements) => {
  return data.filter(iter => elements.includes(iter.skill)).map(iter => traducirAgrupadoPorMes(iter))
}

const Section = () => {
    const context = useContext(AppContext)
    const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([])
    const [dataAcumulado, setDataAcumulado] = useState([])
    const [dataSalario, setDataSalario] = useState([])

    useEffect(() => {
      //Agrupado por mes
      api.agrupadoPorMes(context.pais).then(data => {
        setDataAgrupadoPorMes(data);
      })

      //Acumulado
      api.acumulado(context.pais).then(data => {
        setDataAcumulado(data)
      })

      //Salarios
      api.salarios(context.pais).then(data => {
        setDataSalario(data);
      })
    }, [context.pais])

    return (
      <div className="contenido">
        <article>
          <RelatedSkills />

          { definedDatasets.map(set => (
              <div className="section" key={set.name}>
                <h2 className="section__title">{set.name}</h2>
                <h3 className="section__subtitle">Ocurrencias</h3>
                <CompGraficoPie data={procesarDataAcumulados(dataAcumulado, set.skills)} />
                <h3 className="section__subtitle">Tendencias</h3>
                <CompGraficos data={procesarDataAgrupadosPorMes(dataAgrupadoPorMes, set.skills)} />
                <h3 className="section__subtitle">Salarios Promedios</h3>
                <CompGraficoBarra data={procesarDataSalarios(dataSalario, set.skills)} />
              </div>
            ))}
        </article>
      </div>
    )
}

//-----------------------------------------------------------
//-------------- Definición de Grupos de Datos --------------
//-----------------------------------------------------------
const definedDatasets = [{
  name: 'Lenguajes de Programación',
  skills: ['C', 'C#', 'C++', 'Elixir', 'Erlang', 'Go', 'Golang', 'Java', 'JavaScript', 'Kotlin', 'Objective-C', 'PHP', 'Python', 'R', 'Ruby', 'Scala', 'kotlin', 'objective c', 'TypeScript', 'Swift']
}, {
  name: 'Motores de Base de Datos',
  skills: ['MongoDB', 'MySQL', 'NoSQL', 'Oracle DB', 'Oracle', 'PostgreSQL', 'SQL', 'Redis']
}, {
  name: 'Frameworks de JavaScript',
  skills: ['Angular 2', 'Angular 4', 'Angular 5', 'Angular 6', 'AngularJS', 'Backbone.js', 'Ember.js', 'jQuery', 'Meteor', 'React', 'Sails.js', 'vue.js']
}, {
  name: 'Servcios Cloud',
  skills: ['Amazon Web Services', 'Azure', 'Google App Engine']
}, {
  name: 'Tecnologías Móviles',
  skills: ['Android', 'Cordova', 'Ionic', 'iOS', 'Kotlin', 'kotlin', 'PhoneGap', 'React-Native', 'Xamarin']
}];

export default Section;
