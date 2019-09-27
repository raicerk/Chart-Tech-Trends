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
        Axios.get(config.urlDataLaboral).then(res => {
            let dataLenguaje = res.data.data.LaboralAgrupadoPorMes.filter(iter=>iter.skill === ".NET" || iter.skill === "sql" || iter.skill === "javascript").map(iter => {
                return {
                    "id": iter.skill,
                    "data": iter.datos.map(i => {
                        return {
                            "x": i.fecha,
                            "y": i.cantidad
                        }
                    })
                }
            })
            console.log(dataLenguaje)
            this.setState({ dataLenguajes: dataLenguaje })
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
                <CompGraficos data={this.state.data} />
                <p>
                    Lorea El Ipsum Washas gila saque embarao brocacochi zoronca hermano zorra de vioh, saque del corte para la mano hermano zarpao brocacochi chantar querí ser leyenda, readi saque pero pa q po de vioh chantale el pate oe zi terrible de perkin. Qliao paquepo zarpao chantar asikalao saque truco machucao te tiraste, odio tenis mano? cuca rati querí ser leyenda choro buqué de vioh, tenis mano? de vioh terrible de perkin matagatos de vioh de corte pasa paca coshino ql.
                </p>
            </div>
        );
    }
}

export default CompSection;