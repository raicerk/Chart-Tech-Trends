import React, { Component } from 'react';
import Axios from 'axios';

export const myFirstContext = React.createContext({
    pais: 0
})

class CompPaises extends Component {

    state = {
        paises: [],
        idpais: 0
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

    handleChange = (event) => {
        this.setState({ idpais: event.target.value });
    }

    render() {

        let optionItems

        if (Array.isArray(this.state.paises)) {
            optionItems = this.state.paises.map((pais) =>
                <option key={pais.id.toString()} value={pais.id} >{pais.nombre}</option>
            )
        } else {
            optionItems = <option disabled>Cagando...</option>
        }

        return <div className="paises">
            <myFirstContext.Provider value={{ pais: this.state.idpais }}></myFirstContext.Provider>
            <select onChange={this.handleChange.bind(this)} value={this.state.idpais} >
                {optionItems}
            </select>
        </div>
    }
}

export default CompPaises;