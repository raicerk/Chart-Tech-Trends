import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompGraficos extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                holi {this.props.data}
            </div>
        );
    }
}

CompGraficos.propTypes = {

};

export default CompGraficos;