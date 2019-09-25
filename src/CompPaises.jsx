import React, { Component } from 'react';
import Axios from 'axios';

class CompPaises extends Component {

    state = {
        paises: [
            {
                id: 0,
                nombre: "Cargando paises..."
            }
        ]
    }

    componentDidMount() {
        Axios.get(`http://www.mocky.io/v2/5d8ad48f3500005200d46a6b`).then(result => {
            this.setState({
                paises: result.data
            });
        }).catch(error => {
            this.setState({
                paises: [
                    {
                        id: 0,
                        nombre: "Ocurrio un error al cargar los paises"
                    }
                ]
            });
        })
    }

    render() {

        let optionItems = this.state.paises.map((pais) =>
            <option key={pais.id}>{pais.nombre}</option>
        );
        return <div className="paises">
            <select>
                {optionItems}
            </select>
        </div>
    }
}

export default CompPaises;