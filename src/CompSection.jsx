import React, { Component } from 'react';
import CompGraficos from './CompGraficos';
import Axios from 'axios';

class CompSection extends Component {

    data1 = [];

    componentDidMount() {
        Axios.get(`http://www.mocky.io/v2/5d8cda532e00005100abdd8f`).then(res => {
            this.data1 =  res.data
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="contenido">
                
                <CompGraficos data={this.data1} />
                <p>
                    Lorea El Ipsum Washas gila saque embarao brocacochi zoronca hermano zorra de vioh, saque del corte para la mano hermano zarpao brocacochi chantar querí ser leyenda, readi saque pero pa q po de vioh chantale el pate oe zi terrible de perkin. Qliao paquepo zarpao chantar asikalao saque truco machucao te tiraste, odio tenis mano? cuca rati querí ser leyenda choro buqué de vioh, tenis mano? de vioh terrible de perkin matagatos de vioh de corte pasa paca coshino ql.
                </p>
                <CompGraficos data={this.data1} />
                <p>
                    Lorea El Ipsum Washas gila saque embarao brocacochi zoronca hermano zorra de vioh, saque del corte para la mano hermano zarpao brocacochi chantar querí ser leyenda, readi saque pero pa q po de vioh chantale el pate oe zi terrible de perkin. Qliao paquepo zarpao chantar asikalao saque truco machucao te tiraste, odio tenis mano? cuca rati querí ser leyenda choro buqué de vioh, tenis mano? de vioh terrible de perkin matagatos de vioh de corte pasa paca coshino ql.
                </p>
            </div>
        );
    }
}

export default CompSection;