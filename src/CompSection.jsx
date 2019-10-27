import React, { Component, useContext, useState, useEffect } from 'react';
import CompGraficos from './CompGraficoLinea';
import CompGraficoPie from './CompGraficoPie';
import CompGraficoBarra from './CompGraficoBarra';
import CompGraficoBarraHorizontal from './CompGraficoBarraHorizontal';
import api from './api';
import AppContext from './AppContext'

import './CompSection.css'

class CompSection extends Component {
    render() {
        return (
            <div className="contenido">
                <GetData />
            </div>
        );
    }
}

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

const GetData = () => {
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
        <article>
          <div className="section">
            <h2 className="section__title">Skills Relacionadas</h2>
            <p>Esta funcionalidad te permitirá elegir un skill y ver cuales otros skill son requeridos en conjunto con el seleccionado,
            en el gráfico se refleja los skill complementarios que necesitas aprender o tener noción y que solicitan las compañías en
            las ofertas laborales:</p>
            <OtherSkillGraph />
          </div>

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

//-----------------------------------------------------------
//----------------- Skill complementarios -------------------
//-----------------------------------------------------------
const OtherSkillGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])
    const [skill, setSkill] = useState('.Net')
    let skills = ['.Net', '3D', 'ABAP', 'AI', 'API', 'ASP', 'Access Point', 'ActionScript', 'Adobe Suite', 'Advertising', 'Agile', 'Amazon Web Services', 'Analytics', 'Android', 'Angular 2', 'Angular 4', 'Angular 5', 'Angular 6', 'AngularJS', 'Apache Spark', 'Arquitectura de Información', 'Artificial Intelligence', 'Asterisk', 'Axios', 'Azure', 'Backbone.js', 'Big Data', 'BigQuery', 'Blockchain', 'Bootstrap', 'Branding', 'Business Intelligence', 'C', 'C#', 'C++', 'CEO', 'CMS', 'CRM', 'CSS', 'CTO', 'Cake PHP', 'Celery', 'CircleCi', 'Cloud Computing', 'CodeIgniter', 'Computer vision', 'Continuous Deployment', 'Continuous Integration', 'Copywriting', 'Cordova', 'Customer Service', 'Data Analysis', 'Data Science', 'Data Transformation', 'Deep Learning', 'Design Thinking', 'DevOps', 'Digital Planning', 'Dirección de Arte', 'Django', 'Docker', 'Drupal', 'E-commerce', 'ES2017', 'ES6', 'ETL', 'Ejecutivo de Cuentas', 'Elasticsearch', 'Elixir', 'Ember.js', 'Erlang', 'Excel', 'Express', 'Facebook Ads', 'Flask', 'Front-End', 'Full-stack', 'Functional Programming', 'GIS', 'Git', 'Go', 'Golang', 'Google Adwords', 'Google App Engine', 'GraphQL', 'Graphic Design', 'Groovy', 'Growth', 'HTML5', 'Hadoop', 'Head of Art', 'ITIL', 'Industrial Design', 'Ingeniero Comercial', 'Internet of Things', 'Invision', 'IoT', 'Ionic', 'JEE', 'JSF', 'JSON', 'JasperReports', 'Java', 'JavaScript', 'Jenkins', 'Kanban', 'Kotlin', 'Kubernetes', 'Laravel', 'Lean', 'Liferay', 'Linux', 'MVC', 'Machine Learning', 'Magento', 'Marketing', 'Material Design', 'Matlab', 'Maven', 'Media Planning', 'Meteor', 'Microservices', 'MongoDB', 'Motion Graphics', 'MySQL', 'NPM', 'Natural Language Processing', 'Nginx', 'NoSQL', 'Node.js', 'OSB', 'Objective-C', 'Odoo', 'Openstack', 'Oracle', 'Oracle DB', 'PHP', 'Perl', 'PhoneGap', 'Photoshop', 'Planificación de Medios', 'Planning', 'PostgreSQL', 'Power BI', 'Prestashop', 'Product Manager', 'Project Management', 'Project Manager', 'Python', 'QA', 'QA-Automation', 'R', 'REST', 'REST API', 'RabbitMQ', 'React', 'React-Native', 'Redis', 'Redux', 'Responsive', 'Ruby', 'Ruby on Rails', 'SEM', 'SEO', 'SOA', 'SPA', 'SQL', 'SVN', 'SaaS', 'Sails.js', 'Salesforce', 'Sap', 'Scala', 'Scrum', 'Selenium', 'Service Design', 'Service Desk', 'Shopify', 'Sidekiq', 'Sketch', 'Social Media', 'Soporte técnico', 'Spark', 'Spring', 'Strategic Design', 'Swift', 'Switching', 'Symfony', 'Sysadmin', 'TDD', 'Telefonía', 'Tornado', 'Trafficker', 'TypeScript', 'UI Design', 'UML', 'UX', 'Unity', 'Usabilidad', 'User Research', 'VTEX', 'Varnish', 'Ventas', 'Video Games Development', 'Virtualization', 'Web design', 'Web server', 'Websphere', 'Wireframes', 'WordPress', 'Xamarin', 'Yii2', 'Zend', 'iOS', 'jQuery', 'kotlin', 'objective c', 'vue.js']

  useEffect(() => {
    api.otroSkill(context.pais, skill).then(data => {
      setData(data)
    });

    }, [context.pais, skill])

    return (
        <div>
            <label for="skill_select">Selecciona una Skill:</label>
            <select id="skill_select" onChange={(e) => { setSkill(e.target.value) }} >
                {
                    skills.map((iter, index) =>
                        <option key={String(index)} value={iter}>
                            {iter}
                        </option>
                    )
                }
            </select>
            <CompGraficoBarraHorizontal data={data} />
        </div>
    )
}

// const DatosTendencias = () => {
//     const context = useContext(AppContext)
//     const [cantidadSkill, setCantidadSkill] = useState(0)
//     const [cantidadOferta, setCantidadOferta] = useState(0)

//     useEffect(() => {

//      api.cantidadSkills(context.pais).then(data => {
//        setCantidadSkill(data);
//      })

//      api.cantidadOfertas(context.pais).then(data => {
//        setCantidadOferta(data);
//      })

//     }, [context.pais])

//     return (
//         <div>
//             Cantidad de skills: {cantidadSkill}<br />
//             Cantidad de ofertas laborales: {cantidadOferta}
//         </div>
//     )
// }


export default CompSection;
