import React, { Component, useContext, useState, useEffect } from 'react';
import CompGraficos from './CompGraficoLinea';
import CompGraficoPie from './CompGraficoPie';
import CompGraficoBarra from './CompGraficoBarra';
import Axios from 'axios';
import config from './config.json';
import AppContext from './AppContext'


class CompSection extends Component {
    render() {
        return (
            <div className="contenido">
                
                <LanguageAcumulatedGraph />
                <LanguageGraph />
                <LanguajeSalaryGraph/>

                <DatabaseAcumulatedGraph/>
                <DatabaseGraph />
                
                <FrameworkJSAcumulatedGraph/>
                <FrameworkJSGraph />
                
                <CloudServicesSAcumulatedGraph/>
                <CloudServicesGraph />
                
                <MobileAcumulatedGraph/>
                <MobileGraph />

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

export default CompSection;