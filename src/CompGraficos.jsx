import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompGraficos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            maxSelected: 0
        };

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                holi {this.props.data.nombre}
            </div>
        );
    }
}

CompGraficos.propTypes = {
    data: PropTypes.object
};

export default CompGraficos;