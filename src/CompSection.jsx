import React, { Component } from 'react';
import CompGraficos from './CompGraficos';
import Axios from 'axios';
import config from './config.json';


class CompSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataLenguajes: [],
            dataBaseDeDatos: []
        };
    }


    componentDidMount() {

        // Lenguajes de programacion
        Axios.post(config.urlGraphQL, {
            query:`{
                LaboralAgrupadoPorMes(where: {field: "pais",value: "CL"}){
                    skill
                    datos{
                        fecha
                        cantidad
                    }
                }
            }`
        }).then(res => {
            let dataLenguaje = res.data.data.LaboralAgrupadoPorMes.filter(iter =>
                iter.skill === "C" ||
                iter.skill === "C#" ||
                iter.skill === "C++" ||
                iter.skill === "Go" ||
                iter.skill === "Golang" ||
                iter.skill === "Java" ||
                iter.skill === "JavaScript" ||
                iter.skill === "Objetive-C" ||
                iter.skill === "PHP" ||
                iter.skill === "Python" ||
                iter.skill === "R" ||
                iter.skill === "C++" ||
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
                            "x": `${fec[0]}${fec[1]}`,
                            "y": i.cantidad
                        }
                    })
                }
            })
            this.setState({ dataLenguajes: dataLenguaje })
        }).catch(error => {
            console.log(error)
        })


        // Bases de datos
        Axios.post(config.urlGraphQL, {
            query:`{
                LaboralAgrupadoPorMes(where: {field: "pais",value: "CL"}){
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
                            "x": `${fec[0]}${fec[1]}`,
                            "y": i.cantidad
                        }
                    })
                }
            })
            this.setState({ dataBaseDeDatos: dataBaseDeDatos })
        }).catch(error => {
            console.log(error)
        })

    }

    render() {
        return (
            <div className="contenido">

                <CompGraficos data={this.state.dataLenguajes} />
                <p>
                    Lorea El Ipsum Washas gila saque embarao brocacochi zoronca hermano zorra de vioh, saque del corte para la mano hermano zarpao brocacochi chantar querí ser leyenda, readi saque pero pa q po de vioh chantale el pate oe zi terrible de perkin. Qliao paquepo zarpao chantar asikalao saque truco machucao te tiraste, odio tenis mano? cuca rati querí ser leyenda choro buqué de vioh, tenis mano? de vioh terrible de perkin matagatos de vioh de corte pasa paca coshino ql.
                </p>

                <CompGraficos data={this.state.dataBaseDeDatos} />
                <p>
                    Lorea El Ipsum Washas gila saque embarao brocacochi zoronca hermano zorra de vioh, saque del corte para la mano hermano zarpao brocacochi chantar querí ser leyenda, readi saque pero pa q po de vioh chantale el pate oe zi terrible de perkin. Qliao paquepo zarpao chantar asikalao saque truco machucao te tiraste, odio tenis mano? cuca rati querí ser leyenda choro buqué de vioh, tenis mano? de vioh terrible de perkin matagatos de vioh de corte pasa paca coshino ql.
                </p>
            </div>
        );
    }
}

export default CompSection;