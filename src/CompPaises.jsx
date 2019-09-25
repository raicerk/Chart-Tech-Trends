import React, { Component } from 'react';
import Axios from 'axios';

class CompPaises extends Component {

    state = {
        paises: []
    }

    async componentDidMount() {
        let { data } = await  Axios.get(`http://www.mocky.io/v2/5d8ad48f3500005200d46a6b`);
        this.setState({ paises: data });
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