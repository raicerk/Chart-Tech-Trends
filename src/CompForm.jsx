import React, { Component } from 'react';

class Compform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: ""
        };
        this.sendData = this.sendData.bind(this);
    }

    updateInputValue(evt) {
        this.setState({
            nombre: evt.target.value
        });
    }

    sendData() {
        console.log(this.state.nombre)
    }

    render() {
        return (
            <div>
                <input value={this.state.nombre} onChange={evt => this.updateInputValue(evt)} />
                <button onClick={this.sendData}>Enviar</button>
            </div>
        );
    }
}

export default Compform;