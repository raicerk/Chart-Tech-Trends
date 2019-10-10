import React, { Component, useContext, useState, useEffect } from 'react';
import CompGraficos from './CompGraficoLinea';
import CompGraficoPie from './CompGraficoPie';
import CompGraficoBarra from './CompGraficoBarra';
import CompGraficoBarraHorizontal from './CompGraficoBarraHorizontal';
import Axios from 'axios';
import config from './config.json';
import AppContext from './AppContext'


class CompSection extends Component {
    render() {
        return (
            <div className="contenido">

                <GetData />


            </div>
        );
    }
}

const GetData = () => {
    const context = useContext(AppContext)
    const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([])
    const [dataAcumulado, setDataAcumulado] = useState([])
    const [dataSalario, setDataSalario] = useState([])

    useEffect(() => {

        //Agrupado por mes
        Axios.post(config.urlGraphQL, {
            query: `{
                    LaboralAgrupadoPorMes(where: {field: "pais",value: "${context.pais}"}){
                        skill
                        datos{
                            fecha
                            cantidad
                        }
                    }
                }`
        }).then(res => {
            setDataAgrupadoPorMes(res.data.data.LaboralAgrupadoPorMes)
        }).catch(error => {
            console.log(error)
        })


        //Acumulado
        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralAcumulado(where: {field: "pais",value: "${context.pais}"}){
                        skill
                        cantidad
                    }
                }`
        }).then(res => {
            setDataAcumulado(res.data.data.LaboralAcumulado)
        }).catch(error => {
            console.log(error)
        })

        //Salarios
        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralSalarios(where: {field: "pais",value: "${context.pais}"}){
                    skill
                    salariominimo
                    salariomaximo
                    media
                    cantidad
                }
            }`
        }).then(res => {
            setDataSalario(res.data.data.LaboralSalarios)
        }).catch(error => {
            console.log(error)
        })

    }, [context.pais])

    return (
        <article>

            {/* Separador */}
            <hr />
            <hr />
            {/* Fin separador */}

            Esta funcionalidad te permitirá elegir un skill y ver cuales otros skill son requeridos en conjunto con el seleccionado,
            en el gráfico se refleja los skill complementarios que necesitas aprender o tener noción y que solicitan las compañías en
                las ofertas laborales:<br /> <br /><br />
            <OtherSkillGraph />

            {/* Separador */}
            <hr />
            <hr />
            {/* Fin separador */}

            <label>Lenguajes de programación acumulados desde mayo de 2018 a la fecha</label>
            <LanguageAcumulatedGraphProps LaboralAcumulado={dataAcumulado} />
            <label>Lenguajes de programación, tendencias de lenguajes solicitados en ofertas laborales desde mayo de 2018 a la fecha</label>
            <LanguageGraphProps LaboralAgrupadoPorMes={dataAgrupadoPorMes} />
            <label>Lenguajes de programación promedios de salarios desde mayo de 2018 a la fecha</label>
            <LanguageSalaryGraphProps LaboralSalarios={dataSalario} />


            {/* Separador */}
            <hr />
            <hr />
            {/* Fin separador */}


            <label>Bases de datos acumuladas desde mayo de 2018 a la fecha</label>
            <DataBaseAcumulatedGraphProps LaboralAcumulado={dataAcumulado} />
            <label>Base de datos, tendencias de bases de datos o motores solicitadas en ofertas laborales desde mayo de 2018 a la fecha</label>
            <DataBaseGraphProps LaboralAgrupadoPorMes={dataAgrupadoPorMes} />
            <label>Base de datos promedios de salarios desde mayo de 2018 a la fecha</label>
            <DataBaseSalaryGraphProps LaboralSalarios={dataSalario} />


            {/* Separador */}
            <hr />
            <hr />
            {/* Fin separador */}


            <label>Frameworks JavaScript acumulados desde mayo de 2018 a la fecha</label>
            <FrameworkJSAcumulatedGraphProps LaboralAcumulado={dataAcumulado} />
            <label>Frameworks JavaScript, tendencias de Frameworks JavaScript y tecnologías JavaScript solicitadas en ofertas laborales desde mayo de 2018 a la fecha</label>
            <FrameworkJSGraphProps LaboralAgrupadoPorMes={dataAgrupadoPorMes} />
            <label>Frameworks JavaScript promedios de salarios desde mayo de 2018 a la fecha</label>
            <FrameworkJSSalaryGraphProps LaboralSalarios={dataSalario} />


            {/* Separador */}
            <hr />
            <hr />
            {/* Fin separador */}


            <label>Servicios cloud acumulados desde mayo de 2018 a la fecha</label>
            <CloudServicesAcumulatedGraphProps LaboralAcumulado={dataAcumulado} />
            <label>Servicios cloud, tendencias de nubes solicitadas en ofertas laborales desde mayo de 2018 a la fecha</label>
            <CloudServicesGraphProps LaboralAgrupadoPorMes={dataAgrupadoPorMes} />
            <label>Servicios cloud promedios de salarios desde mayo de 2018 a la fecha</label>
            <CloudServicesSalaryGraphProps LaboralSalarios={dataSalario} />


            {/* Separador */}
            <hr />
            <hr />
            {/* Fin separador */}


            <label>Tecnologías móviles acumuladas desde mayo de 2018 a la fecha</label>
            <MobileAcumulatedGraphProps LaboralAcumulado={dataAcumulado} />
            <label>Tecnologías móviles, tendencias de tecnologías móviles solicitadas en ofertas laborales desde mayo de 2018 a la fecha</label>
            <MobileGraphProps LaboralAgrupadoPorMes={dataAgrupadoPorMes} />
            <label>Tecnologías móviles promedios de salarios desde mayo de 2018 a la fecha</label>
            <MobileSalaryGraphProps LaboralSalarios={dataSalario} />

        </article>
    )
}

const LanguageAcumulatedGraphProps = (props) => {

    const [dataAcumulado, setDataAcumulado] = useState([])

    useEffect(() => {
        const dataLenguajeAcumulado = props.LaboralAcumulado.filter(iter =>
            iter.skill === "C" ||
            iter.skill === "C#" ||
            iter.skill === "C++" ||
            iter.skill === "Erlang" ||
            iter.skill === "Go" ||
            iter.skill === "Golang" ||
            iter.skill === "Java" ||
            iter.skill === "JavaScript" ||
            iter.skill === "Objetive-C" ||
            iter.skill === "PHP" ||
            iter.skill === "Python" ||
            iter.skill === "R" ||
            iter.skill === "Ruby" ||
            iter.skill === "Scala" ||
            iter.skill === "Swift" ||
            iter.skill === "TypeScript" ||
            iter.skill === "Kotlin"
        ).map(iter => {
            return {
                "id": iter.skill,
                "value": iter.cantidad
            }
        })
        setDataAcumulado(dataLenguajeAcumulado)
    }, [props])

    return (
        <CompGraficoPie data={dataAcumulado} />
    )
}

const LanguageGraphProps = (props) => {

    const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([])

    useEffect(() => {
        const dataLenguaje = props.LaboralAgrupadoPorMes.filter(iter =>
            iter.skill === "C" ||
            iter.skill === "C#" ||
            iter.skill === "C++" ||
            iter.skill === "Erlang" ||
            iter.skill === "Go" ||
            iter.skill === "Golang" ||
            iter.skill === "Java" ||
            iter.skill === "JavaScript" ||
            iter.skill === "Objetive-C" ||
            iter.skill === "PHP" ||
            iter.skill === "Python" ||
            iter.skill === "R" ||
            iter.skill === "Ruby" ||
            iter.skill === "Scala" ||
            iter.skill === "Swift" ||
            iter.skill === "TypeScript" ||
            iter.skill === "Kotlin"
        ).map(iter => {
            return {
                "id": iter.skill,
                "data": iter.datos.sort().map(i => {
                    let fec = i.fecha.split("-")
                    return {
                        "x": `${fec[0]}-${fec[1]}-${new Date(fec[0], fec[1], 0).getDate()}`,
                        "y": i.cantidad
                    }
                })
            }
        })
        setDataAgrupadoPorMes(dataLenguaje)
    }, [props])

    return (
        <CompGraficos data={dataAgrupadoPorMes} />
    )
}

const LanguageSalaryGraphProps = (props) => {

    const [dataSalario, setDataSalario] = useState([])

    useEffect(() => {
        const dataLenguajeSalario = props.LaboralSalarios.filter(iter =>
            iter.skill === "C" ||
            iter.skill === "C#" ||
            iter.skill === "C++" ||
            iter.skill === "Erlang" ||
            iter.skill === "Go" ||
            iter.skill === "Golang" ||
            iter.skill === "Java" ||
            iter.skill === "JavaScript" ||
            iter.skill === "Objetive-C" ||
            iter.skill === "PHP" ||
            iter.skill === "Python" ||
            iter.skill === "R" ||
            iter.skill === "Ruby" ||
            iter.skill === "Scala" ||
            iter.skill === "Swift" ||
            iter.skill === "TypeScript" ||
            iter.skill === "Kotlin"
        )
        setDataSalario(dataLenguajeSalario)
    }, [props])

    return (
        <CompGraficoBarra data={dataSalario} />
    )
}

//-----------------------------------------------------------
//--------------------- Bases de datos ----------------------
//-----------------------------------------------------------
const DataBaseAcumulatedGraphProps = (props) => {
    const [dataAcumulado, setDataAcumulado] = useState([])

    useEffect(() => {
        const dataLenguajeAcumulado = props.LaboralAcumulado.filter(iter =>
            iter.skill === "MongoDB" ||
            iter.skill === "MySQL" ||
            iter.skill === "NoSQL" ||
            iter.skill === "Oracle" ||
            iter.skill === "Oracle DB" ||
            iter.skill === "PostgreSQL" ||
            iter.skill === "Redis" ||
            iter.skill === "SQL"
        ).map(iter => {
            return {
                "id": iter.skill,
                "value": iter.cantidad
            }
        })
        setDataAcumulado(dataLenguajeAcumulado)
    }, [props])

    return (
        <CompGraficoPie data={dataAcumulado} />
    )
}

const DataBaseGraphProps = (props) => {

    const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([])

    useEffect(() => {
        const dataLenguaje = props.LaboralAgrupadoPorMes.filter(iter =>
            iter.skill === "MongoDB" ||
            iter.skill === "MySQL" ||
            iter.skill === "NoSQL" ||
            iter.skill === "Oracle" ||
            iter.skill === "Oracle DB" ||
            iter.skill === "PostgreSQL" ||
            iter.skill === "Redis" ||
            iter.skill === "SQL"
        ).map(iter => {
            return {
                "id": iter.skill,
                "data": iter.datos.sort().map(i => {
                    let fec = i.fecha.split("-")
                    return {
                        "x": `${fec[0]}-${fec[1]}-${new Date(fec[0], fec[1], 0).getDate()}`,
                        "y": i.cantidad
                    }
                })
            }
        })
        setDataAgrupadoPorMes(dataLenguaje)
    }, [props])

    return (
        <CompGraficos data={dataAgrupadoPorMes} />
    )
}

const DataBaseSalaryGraphProps = (props) => {

    const [dataSalario, setDataSalario] = useState([])

    useEffect(() => {
        const dataLenguajeSalario = props.LaboralSalarios.filter(iter =>
            iter.skill === "MongoDB" ||
            iter.skill === "MySQL" ||
            iter.skill === "NoSQL" ||
            iter.skill === "Oracle" ||
            iter.skill === "Oracle DB" ||
            iter.skill === "PostgreSQL" ||
            iter.skill === "Redis" ||
            iter.skill === "SQL"
        )
        setDataSalario(dataLenguajeSalario)
    }, [props])

    return (
        <CompGraficoBarra data={dataSalario} />
    )
}

//-----------------------------------------------------------
//------------------ Framework JavaScript -------------------
//-----------------------------------------------------------
const FrameworkJSAcumulatedGraphProps = (props) => {

    const [dataAcumulado, setDataAcumulado] = useState([])

    useEffect(() => {
        const dataLenguajeAcumulado = props.LaboralAcumulado.filter(iter =>
            iter.skill === "Angular 2" ||
            iter.skill === "Angular 4" ||
            iter.skill === "Angular 5" ||
            iter.skill === "Angular 6" ||
            iter.skill === "AngularJS" ||
            iter.skill === "Backbone.js" ||
            iter.skill === "Ember.js" ||
            iter.skill === "jQuery" ||
            iter.skill === "Meteor" ||
            iter.skill === "React" ||
            iter.skill === "Sails.js" ||
            iter.skill === "vue.js"
        ).map(iter => {
            return {
                "id": iter.skill,
                "value": iter.cantidad
            }
        })
        setDataAcumulado(dataLenguajeAcumulado)
    }, [props])

    return (
        <CompGraficoPie data={dataAcumulado} />
    )
}

const FrameworkJSGraphProps = (props) => {

    const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([])

    useEffect(() => {
        const dataLenguaje = props.LaboralAgrupadoPorMes.filter(iter =>
            iter.skill === "Angular 2" ||
            iter.skill === "Angular 4" ||
            iter.skill === "Angular 5" ||
            iter.skill === "Angular 6" ||
            iter.skill === "AngularJS" ||
            iter.skill === "Backbone.js" ||
            iter.skill === "Ember.js" ||
            iter.skill === "jQuery" ||
            iter.skill === "Meteor" ||
            iter.skill === "React" ||
            iter.skill === "Sails.js" ||
            iter.skill === "vue.js"
        ).map(iter => {
            return {
                "id": iter.skill,
                "data": iter.datos.sort().map(i => {
                    let fec = i.fecha.split("-")
                    return {
                        "x": `${fec[0]}-${fec[1]}-${new Date(fec[0], fec[1], 0).getDate()}`,
                        "y": i.cantidad
                    }
                })
            }
        })
        setDataAgrupadoPorMes(dataLenguaje)
    }, [props])

    return (
        <CompGraficos data={dataAgrupadoPorMes} />
    )
}

const FrameworkJSSalaryGraphProps = (props) => {

    const [dataSalario, setDataSalario] = useState([])

    useEffect(() => {
        const dataLenguajeSalario = props.LaboralSalarios.filter(iter =>
            iter.skill === "Angular 2" ||
            iter.skill === "Angular 4" ||
            iter.skill === "Angular 5" ||
            iter.skill === "Angular 6" ||
            iter.skill === "AngularJS" ||
            iter.skill === "Backbone.js" ||
            iter.skill === "Ember.js" ||
            iter.skill === "jQuery" ||
            iter.skill === "Meteor" ||
            iter.skill === "React" ||
            iter.skill === "Sails.js" ||
            iter.skill === "vue.js"
        )
        setDataSalario(dataLenguajeSalario)
    }, [props])

    return (
        <CompGraficoBarra data={dataSalario} />
    )
}

//-----------------------------------------------------------
//--------------------- Cloud Services ----------------------
//-----------------------------------------------------------
const CloudServicesAcumulatedGraphProps = (props) => {

    const [dataAcumulado, setDataAcumulado] = useState([])

    useEffect(() => {
        const dataLenguajeAcumulado = props.LaboralAcumulado.filter(iter =>
            iter.skill === "Amazon Web Services" ||
            iter.skill === "Azure" ||
            iter.skill === "Google App Engine"
        ).map(iter => {
            return {
                "id": iter.skill,
                "value": iter.cantidad
            }
        })
        setDataAcumulado(dataLenguajeAcumulado)
    }, [props])

    return (
        <CompGraficoPie data={dataAcumulado} />
    )
}

const CloudServicesGraphProps = (props) => {

    const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([])

    useEffect(() => {
        const dataLenguaje = props.LaboralAgrupadoPorMes.filter(iter =>
            iter.skill === "Amazon Web Services" ||
            iter.skill === "Azure" ||
            iter.skill === "Google App Engine"
        ).map(iter => {
            return {
                "id": iter.skill,
                "data": iter.datos.sort().map(i => {
                    let fec = i.fecha.split("-")
                    return {
                        "x": `${fec[0]}-${fec[1]}-${new Date(fec[0], fec[1], 0).getDate()}`,
                        "y": i.cantidad
                    }
                })
            }
        })
        setDataAgrupadoPorMes(dataLenguaje)
    }, [props])

    return (
        <CompGraficos data={dataAgrupadoPorMes} />
    )
}

const CloudServicesSalaryGraphProps = (props) => {

    const [dataSalario, setDataSalario] = useState([])

    useEffect(() => {
        const dataLenguajeSalario = props.LaboralSalarios.filter(iter =>
            iter.skill === "Amazon Web Services" ||
            iter.skill === "Azure" ||
            iter.skill === "Google App Engine"
        )
        setDataSalario(dataLenguajeSalario)
    }, [props])

    return (
        <CompGraficoBarra data={dataSalario} />
    )
}

//-----------------------------------------------------------
//------------------------- Mobile --------------------------
//-----------------------------------------------------------
const MobileAcumulatedGraphProps = (props) => {

    const [dataAcumulado, setDataAcumulado] = useState([])

    useEffect(() => {
        const dataLenguajeAcumulado = props.LaboralAcumulado.filter(iter =>
            iter.skill === "Android" ||
            iter.skill === "Cordova" ||
            iter.skill === "Ionic" ||
            iter.skill === "Kotlin" ||
            iter.skill === "PhoneGap" ||
            iter.skill === "React-Native" ||
            iter.skill === "Xamarin" ||
            iter.skill === "iOS" ||
            iter.skill === "kotlin"
        ).map(iter => {
            return {
                "id": iter.skill,
                "value": iter.cantidad
            }
        })
        setDataAcumulado(dataLenguajeAcumulado)
    }, [props])

    return (
        <CompGraficoPie data={dataAcumulado} />
    )
}

const MobileGraphProps = (props) => {

    const [dataAgrupadoPorMes, setDataAgrupadoPorMes] = useState([])

    useEffect(() => {
        const dataLenguaje = props.LaboralAgrupadoPorMes.filter(iter =>
            iter.skill === "Android" ||
            iter.skill === "Cordova" ||
            iter.skill === "Ionic" ||
            iter.skill === "Kotlin" ||
            iter.skill === "PhoneGap" ||
            iter.skill === "React-Native" ||
            iter.skill === "Xamarin" ||
            iter.skill === "iOS" ||
            iter.skill === "kotlin"
        ).map(iter => {
            return {
                "id": iter.skill,
                "data": iter.datos.sort().map(i => {
                    let fec = i.fecha.split("-")
                    return {
                        "x": `${fec[0]}-${fec[1]}-${new Date(fec[0], fec[1], 0).getDate()}`,
                        "y": i.cantidad
                    }
                })
            }
        })
        setDataAgrupadoPorMes(dataLenguaje)
    }, [props])

    return (
        <CompGraficos data={dataAgrupadoPorMes} />
    )
}

const MobileSalaryGraphProps = (props) => {

    const [dataSalario, setDataSalario] = useState([])

    useEffect(() => {
        const dataLenguajeSalario = props.LaboralSalarios.filter(iter =>
            iter.skill === "Android" ||
            iter.skill === "Cordova" ||
            iter.skill === "Ionic" ||
            iter.skill === "Kotlin" ||
            iter.skill === "PhoneGap" ||
            iter.skill === "React-Native" ||
            iter.skill === "Xamarin" ||
            iter.skill === "iOS" ||
            iter.skill === "kotlin"
        )
        setDataSalario(dataLenguajeSalario)
    }, [props])

    return (
        <CompGraficoBarra data={dataSalario} />
    )
}

//-----------------------------------------------------------
//----------------- Skill complementarios -------------------
//-----------------------------------------------------------
const OtherSkillGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])
    const [skill, setSkill] = useState('.Net')
    let skills = ['.Net', '3D', 'ABAP', 'AI', 'API', 'ASP', 'Access Point', 'ActionScript', 'Adobe Suite', 'Advertising', 'Agile', 'Amazon Web Services', 'Analytics', 'Android', 'Angular 2', 'Angular 4', 'Angular 5', 'Angular 6', 'AngularJS', 'Apache Spark', 'Arquitectura de Información', 'Artificial Intelligence', 'Asterisk', 'Axios', 'Azure', 'Backbone.js', 'Big Data', 'BigQuery', 'Blockchain', 'Bootstrap', 'Branding', 'Business Intelligence', 'C', 'C#', 'C++', 'CEO', 'CMS', 'CRM', 'CSS', 'CTO', 'Cake PHP', 'Celery', 'CircleCi', 'Cloud Computing', 'CodeIgniter', 'Computer vision', 'Continuous Deployment', 'Continuous Integration', 'Copywriting', 'Cordova', 'Customer Service', 'Data Analysis', 'Data Science', 'Data Transformation', 'Deep Learning', 'Design Thinking', 'DevOps', 'Digital Planning', 'Dirección de Arte', 'Django', 'Docker', 'Drupal', 'E-commerce', 'ES2017', 'ES6', 'ETL', 'Ejecutivo de Cuentas', 'Elasticsearch', 'Elixir', 'Ember.js', 'Erlang', 'Excel', 'Express', 'Facebook Ads', 'Flask', 'Front-End', 'Full-stack', 'Functional Programming', 'GIS', 'Git', 'Go', 'Golang', 'Google Adwords', 'Google App Engine', 'GraphQL', 'Graphic Design', 'Groovy', 'Growth', 'HTML5', 'Hadoop', 'Head of Art', 'ITIL', 'Industrial Design', 'Ingeniero Comercial', 'Internet of Things', 'Invision', 'IoT', 'Ionic', 'JEE', 'JSF', 'JSON', 'JasperReports', 'Java', 'JavaScript', 'Jenkins', 'Kanban', 'Kotlin', 'Kubernetes', 'Laravel', 'Lean', 'Liferay', 'Linux', 'MVC', 'Machine Learning', 'Magento', 'Marketing', 'Material Design', 'Matlab', 'Maven', 'Media Planning', 'Meteor', 'Microservices', 'MongoDB', 'Motion Graphics', 'MySQL', 'NPM', 'Natural Language Processing', 'Nginx', 'NoSQL', 'Node.js', 'OSB', 'Objective-C', 'Odoo', 'Openstack', 'Oracle', 'Oracle DB', 'PHP', 'Perl', 'PhoneGap', 'Photoshop', 'Planificación de Medios', 'Planning', 'PostgreSQL', 'Power BI', 'Prestashop', 'Product Manager', 'Project Management', 'Project Manager', 'Python', 'QA', 'QA-Automation', 'R', 'REST', 'REST API', 'RabbitMQ', 'React', 'React-Native', 'Redis', 'Redux', 'Responsive', 'Ruby', 'Ruby on Rails', 'SEM', 'SEO', 'SOA', 'SPA', 'SQL', 'SVN', 'SaaS', 'Sails.js', 'Salesforce', 'Sap', 'Scala', 'Scrum', 'Selenium', 'Service Design', 'Service Desk', 'Shopify', 'Sidekiq', 'Sketch', 'Social Media', 'Soporte técnico', 'Spark', 'Spring', 'Strategic Design', 'Swift', 'Switching', 'Symfony', 'Sysadmin', 'TDD', 'Telefonía', 'Tornado', 'Trafficker', 'TypeScript', 'UI Design', 'UML', 'UX', 'Unity', 'Usabilidad', 'User Research', 'VTEX', 'Varnish', 'Ventas', 'Video Games Development', 'Virtualization', 'Web design', 'Web server', 'Websphere', 'Wireframes', 'WordPress', 'Xamarin', 'Yii2', 'Zend', 'iOS', 'jQuery', 'kotlin', 'objective c', 'vue.js']

    useEffect(() => {


        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralConOtrosSkill(country: {value: "${context.pais}"}, skill: {value: "${skill}"}){
                    skill
                    cantidad
                }
            }`
        }).then(res => {
            const datOtherSkill = res.data.data.LaboralConOtrosSkill.filter(iter => iter.skill !== skill).slice(0, 10).sort((a, b) => {
                if (a.cantidad > b.cantidad) {
                    return 1;
                }
                if (a.cantidad < b.cantidad) {
                    return -1;
                }
                return 0;
            })
            setData(datOtherSkill)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais, skill])

    return (
        <div>
            Selecciona un skill:
            <select onChange={(e) => { setSkill(e.target.value) }} >
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


//         Axios.post(config.urlGraphQL, {
//             query: `{
//                 LaboralAcumulado(where: {field: "pais",value: "${context.pais}"}){
//                         cantidad
//                     }
//                 }`
//         }).then(resAcunulado => {
//             let cantidadSkill = resAcunulado.data.data.LaboralAcumulado.reduce((a, b) => ({
//                 cantidad: a.cantidad + b.cantidad
//             }))
//             setCantidadSkill(cantidadSkill.cantidad)
//         }).catch(error => {
//             console.log(error)
//         })


//         Axios.post(config.urlGraphQL, {
//             query: `{
//                 Laboral(where: {field: "pais", value: "${context.pais}"}, order: {by: "fecha", orientation: "desc"}) {
//                         link
//                     }
//                 }`
//         }).then(resOfertas => {
//             console.log(resOfertas.data.data.Laboral.length)
//             setCantidadOferta(resOfertas.data.data.Laboral.length)
//         }).catch(error => {
//             console.log(error)
//         })

//     }, [context.pais])

//     return (
//         <div>
//             Cantidad de skills: {cantidadSkill}<br />
//             Cantidad de ofertas laborales: {cantidadOferta}
//         </div>
//     )
// }


export default CompSection;