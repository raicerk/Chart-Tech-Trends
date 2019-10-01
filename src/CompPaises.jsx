import React, { Component } from 'react';
import Axios from 'axios';
import { myFirstContext } from './App'


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

    handleChange = (contx,event) => {
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
            <myFirstContext.Consumer>
                {(context) => (
                    <select onChange={(e)=> {
                        context.setPais(this.state.idpais)
                        this.handleChange(this,e)
                    }} value={this.state.idpais} >
                        {optionItems}
                    </select>
                )}
            </myFirstContext.Consumer>
        </div>
    }
}

export default CompPaises;