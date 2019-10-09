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

                <hr />

                Esta funcionalidad te permitirá elegir un skill y ver cuales otros skill son requeridos en conjunto con el seleccionado, 
                en el gráfico se refleja los skill complementarios que necesitas aprender o tener noción y que solicitan las compañías en 
                las ofertas laborales:<br/> <br/><br/>
                <OtherSkillGraph />
               
                <hr />
                <hr />

                Lenguajes de programación acumulados desde mayo de 2018 a la fecha
                <LanguageAcumulatedGraph />
                
                Lenguajes de programación, tendencias de lenguajes solicitados en ofertas laborales desde mayo de 2018 a la fecha
                <LanguageGraph />
                
                Lenguajes de programación promedios de salarios desde mayo de 2018 a la fecha
                <LanguajeSalaryGraph />
                
                <hr />
                <hr />

                <DatabaseAcumulatedGraph />
                <DatabaseGraph />
                <DatabaseSalaryGraph />
                <hr />

                <hr />
                <FrameworkJSAcumulatedGraph />
                <FrameworkJSGraph />
                <FrameworkJSSalaryGraph />
                <hr />

                <hr />
                <CloudServicesSAcumulatedGraph />
                <CloudServicesGraph />
                <CloudServicesSalaryGraph />
                <hr />

                <hr />
                <MobileAcumulatedGraph />
                <MobileGraph />
                <MobileSalaryGraph />
                <hr />
            </div>
        );
    }
}

const LanguageGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            const dataLenguaje = res.data.data.LaboralAgrupadoPorMes.filter(iter =>
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
            setData(dataLenguaje)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficos data={data} />
    )
}

const DatabaseGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            let dataBaseDeDatos = res.data.data.LaboralAgrupadoPorMes.filter(iter =>
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
            setData(dataBaseDeDatos)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficos data={data} />
    )
}

const FrameworkJSGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            let dataFrameworkJS = res.data.data.LaboralAgrupadoPorMes.filter(iter =>
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
            setData(dataFrameworkJS)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficos data={data} />
    )
}

const CloudServicesGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            let dataCloudServices = res.data.data.LaboralAgrupadoPorMes.filter(iter =>
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
            setData(dataCloudServices)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficos data={data} />
    )
}

const MobileGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            let dataMobiles = res.data.data.LaboralAgrupadoPorMes.filter(iter =>
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
            setData(dataMobiles)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficos data={data} />
    )
}

const LanguageAcumulatedGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralAcumulado(where: {field: "pais",value: "${context.pais}"}){
                        skill
                        cantidad
                    }
                }`
        }).then(res => {
            const dataLenguajeAcumulado = res.data.data.LaboralAcumulado.filter(iter =>
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
            setData(dataLenguajeAcumulado)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoPie data={data} />
    )
}

const DatabaseAcumulatedGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralAcumulado(where: {field: "pais",value: "${context.pais}"}){
                        skill
                        cantidad
                    }
                }`
        }).then(res => {
            const dataBaseDeDatosAcumulado = res.data.data.LaboralAcumulado.filter(iter =>
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
            setData(dataBaseDeDatosAcumulado)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoPie data={data} />
    )
}

const FrameworkJSAcumulatedGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralAcumulado(where: {field: "pais",value: "${context.pais}"}){
                        skill
                        cantidad
                    }
                }`
        }).then(res => {
            const dataFrameworkJSAcumulado = res.data.data.LaboralAcumulado.filter(iter =>
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
            setData(dataFrameworkJSAcumulado)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoPie data={data} />
    )
}

const CloudServicesSAcumulatedGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralAcumulado(where: {field: "pais",value: "${context.pais}"}){
                        skill
                        cantidad
                    }
                }`
        }).then(res => {
            const dataCloudServicesAcumulado = res.data.data.LaboralAcumulado.filter(iter =>
                iter.skill === "Amazon Web Services" ||
                iter.skill === "Azure" ||
                iter.skill === "Google App Engine"
            ).map(iter => {
                return {
                    "id": iter.skill,
                    "value": iter.cantidad
                }
            })
            setData(dataCloudServicesAcumulado)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoPie data={data} />
    )
}

const MobileAcumulatedGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.post(config.urlGraphQL, {
            query: `{
                LaboralAcumulado(where: {field: "pais",value: "${context.pais}"}){
                        skill
                        cantidad
                    }
                }`
        }).then(res => {
            const dataMobileAcumulado = res.data.data.LaboralAcumulado.filter(iter =>
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
            setData(dataMobileAcumulado)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoPie data={data} />
    )
}

const LanguajeSalaryGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            const dataLenguajeSalario = res.data.data.LaboralSalarios.filter(iter =>
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
            setData(dataLenguajeSalario)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoBarra data={data} />
    )
}

const DatabaseSalaryGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            const dataBaseDeDatosSalario = res.data.data.LaboralSalarios.filter(iter =>
                iter.skill === "MongoDB" ||
                iter.skill === "MySQL" ||
                iter.skill === "NoSQL" ||
                iter.skill === "Oracle" ||
                iter.skill === "Oracle DB" ||
                iter.skill === "PostgreSQL" ||
                iter.skill === "Redis" ||
                iter.skill === "SQL"
            )
            setData(dataBaseDeDatosSalario)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoBarra data={data} />
    )
}

const FrameworkJSSalaryGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            const dataFrameworkJSSalario = res.data.data.LaboralSalarios.filter(iter =>
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
            setData(dataFrameworkJSSalario)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoBarra data={data} />
    )
}

const CloudServicesSalaryGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            const dataCloudServicesSalario = res.data.data.LaboralSalarios.filter(iter =>
                iter.skill === "Amazon Web Services" ||
                iter.skill === "Azure" ||
                iter.skill === "Google App Engine"
            )
            setData(dataCloudServicesSalario)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoBarra data={data} />
    )
}

const MobileSalaryGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
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
            const dataMobilesSalario = res.data.data.LaboralSalarios.filter(iter =>
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
            setData(dataMobilesSalario)
        }).catch(error => {
            console.log(error)
        })
    }, [context.pais])

    return (
        <CompGraficoBarra data={data} />
    )
}

const OtherSkillGraph = () => {
    const context = useContext(AppContext)
    const [data, setData] = useState([])
    const [skill, setSkill] = useState('.Net')
    let skills = ['.Net','3D','ABAP','AI','API','ASP','Access Point','ActionScript','Adobe Suite','Advertising','Agile','Amazon Web Services','Analytics','Android','Angular 2','Angular 4','Angular 5','Angular 6','AngularJS','Apache Spark','Arquitectura de Información','Artificial Intelligence','Asterisk','Axios','Azure','Backbone.js','Big Data','BigQuery','Blockchain','Bootstrap','Branding','Business Intelligence','C','C#','C++','CEO','CMS','CRM','CSS','CTO','Cake PHP','Celery','CircleCi','Cloud Computing','CodeIgniter','Computer vision','Continuous Deployment','Continuous Integration','Copywriting','Cordova','Customer Service','Data Analysis','Data Science','Data Transformation','Deep Learning','Design Thinking','DevOps','Digital Planning','Dirección de Arte','Django','Docker','Drupal','E-commerce','ES2017','ES6','ETL','Ejecutivo de Cuentas','Elasticsearch','Elixir','Ember.js','Erlang','Excel','Express','Facebook Ads','Flask','Front-End','Full-stack','Functional Programming','GIS','Git','Go','Golang','Google Adwords','Google App Engine','GraphQL','Graphic Design','Groovy','Growth','HTML5','Hadoop','Head of Art','ITIL','Industrial Design','Ingeniero Comercial','Internet of Things','Invision','IoT','Ionic','JEE','JSF','JSON','JasperReports','Java','JavaScript','Jenkins','Kanban','Kotlin','Kubernetes','Laravel','Lean','Liferay','Linux','MVC','Machine Learning','Magento','Marketing','Material Design','Matlab','Maven','Media Planning','Meteor','Microservices','MongoDB','Motion Graphics','MySQL','NPM','Natural Language Processing','Nginx','NoSQL','Node.js','OSB','Objective-C','Odoo','Openstack','Oracle','Oracle DB','PHP','Perl','PhoneGap','Photoshop','Planificación de Medios','Planning','PostgreSQL','Power BI','Prestashop','Product Manager','Project Management','Project Manager','Python','QA','QA-Automation','R','REST','REST API','RabbitMQ','React','React-Native','Redis','Redux','Responsive','Ruby','Ruby on Rails','SEM','SEO','SOA','SPA','SQL','SVN','SaaS','Sails.js','Salesforce','Sap','Scala','Scrum','Selenium','Service Design','Service Desk','Shopify','Sidekiq','Sketch','Social Media','Soporte técnico','Spark','Spring','Strategic Design','Swift','Switching','Symfony','Sysadmin','TDD','Telefonía','Tornado','Trafficker','TypeScript','UI Design','UML','UX','Unity','Usabilidad','User Research','VTEX','Varnish','Ventas','Video Games Development','Virtualization','Web design','Web server','Websphere','Wireframes','WordPress','Xamarin','Yii2','Zend','iOS','jQuery','kotlin','objective c','vue.js']

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


export default CompSection;