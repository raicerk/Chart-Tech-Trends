import React, { useContext, useState, useEffect } from 'react';

import { SingleSelect } from "react-select-material-ui";

import CompGraficoBarraHorizontal from './CompGraficoBarraHorizontal';

import api from '../api';
import AppContext from '../AppContext';

const RelatedSkills = () => {
  const context = useContext(AppContext);
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState('.Net');
  let skills = ['.Net', '3D', 'ABAP', 'AI', 'API', 'ASP', 'Access Point', 'ActionScript', 'Adobe Suite', 'Advertising', 'Agile', 'Amazon Web Services', 'Analytics', 'Android', 'Angular 2', 'Angular 4', 'Angular 5', 'Angular 6', 'AngularJS', 'Apache Spark', 'Arquitectura de Información', 'Artificial Intelligence', 'Asterisk', 'Axios', 'Azure', 'Backbone.js', 'Big Data', 'BigQuery', 'Blockchain', 'Bootstrap', 'Branding', 'Business Intelligence', 'C', 'C#', 'C++', 'CEO', 'CMS', 'CRM', 'CSS', 'CTO', 'Cake PHP', 'Celery', 'CircleCi', 'Cloud Computing', 'CodeIgniter', 'Computer vision', 'Continuous Deployment', 'Continuous Integration', 'Copywriting', 'Cordova', 'Customer Service', 'Data Analysis', 'Data Science', 'Data Transformation', 'Deep Learning', 'Design Thinking', 'DevOps', 'Digital Planning', 'Dirección de Arte', 'Django', 'Docker', 'Drupal', 'E-commerce', 'ES2017', 'ES6', 'ETL', 'Ejecutivo de Cuentas', 'Elasticsearch', 'Elixir', 'Ember.js', 'Erlang', 'Excel', 'Express', 'Facebook Ads', 'Flask', 'Front-End', 'Full-stack', 'Functional Programming', 'GIS', 'Git', 'Go', 'Golang', 'Google Adwords', 'Google App Engine', 'GraphQL', 'Graphic Design', 'Groovy', 'Growth', 'HTML5', 'Hadoop', 'Head of Art', 'ITIL', 'Industrial Design', 'Ingeniero Comercial', 'Internet of Things', 'Invision', 'IoT', 'Ionic', 'JEE', 'JSF', 'JSON', 'JasperReports', 'Java', 'JavaScript', 'Jenkins', 'Kanban', 'Kotlin', 'Kubernetes', 'Laravel', 'Lean', 'Liferay', 'Linux', 'MVC', 'Machine Learning', 'Magento', 'Marketing', 'Material Design', 'Matlab', 'Maven', 'Media Planning', 'Meteor', 'Microservices', 'MongoDB', 'Motion Graphics', 'MySQL', 'NPM', 'Natural Language Processing', 'Nginx', 'NoSQL', 'Node.js', 'OSB', 'Objective-C', 'Odoo', 'Openstack', 'Oracle', 'Oracle DB', 'PHP', 'Perl', 'PhoneGap', 'Photoshop', 'Planificación de Medios', 'Planning', 'PostgreSQL', 'Power BI', 'Prestashop', 'Product Manager', 'Project Management', 'Project Manager', 'Python', 'QA', 'QA-Automation', 'R', 'REST', 'REST API', 'RabbitMQ', 'React', 'React-Native', 'Redis', 'Redux', 'Responsive', 'Ruby', 'Ruby on Rails', 'SEM', 'SEO', 'SOA', 'SPA', 'SQL', 'SVN', 'SaaS', 'Sails.js', 'Salesforce', 'Sap', 'Scala', 'Scrum', 'Selenium', 'Service Design', 'Service Desk', 'Shopify', 'Sidekiq', 'Sketch', 'Social Media', 'Soporte técnico', 'Spark', 'Spring', 'Strategic Design', 'Swift', 'Switching', 'Symfony', 'Sysadmin', 'TDD', 'Telefonía', 'Tornado', 'Trafficker', 'TypeScript', 'UI Design', 'UML', 'UX', 'Unity', 'Usabilidad', 'User Research', 'VTEX', 'Varnish', 'Ventas', 'Video Games Development', 'Virtualization', 'Web design', 'Web server', 'Websphere', 'Wireframes', 'WordPress', 'Xamarin', 'Yii2', 'Zend', 'iOS', 'jQuery', 'kotlin', 'objective c', 'vue.js'];

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
        options={skills}
        onChange={(skill) => setSkill(skill)}
        style={{ width: 320 }}
      />
      <CompGraficoBarraHorizontal data={data} />
    </div>
  );
};

export default RelatedSkills;
