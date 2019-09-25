import React, { Component } from 'react';
import Axios from 'axios';

class CompPaises extends Component {

    state = {
        paises: []
    }

    componentDidMount() {
        Axios.get(`http://www.mocky.io/v2/5d8ad48f3500005200d46a6b`).then(result => {
            this.setState({
                paises: result.data
            });
        }).catch(error => {
            this.setState({
                paises: ""
            });
        })
    }

    render() {

        let optionItems

        if (Array.isArray(this.state.paises)) {
            optionItems = this.state.paises.map((pais) =>
                <option key={pais.id}>{pais.nombre}</option>
            )
        } else {
            optionItems = <option disabled>Cagando...</option>
        }


        return <div className="paises">
            <select>
                {optionItems}
            </select>
        </div>
    }
}

export default CompPaises;