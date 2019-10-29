import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import config from '../config.json';
import PropTypes from 'prop-types';

class CompGraficoBarraHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            other: ""
        };
    }

    render() {
        return (
            <div className="grafico">
                <ResponsiveBar
                    data={this.props.data}
                    indexBy={'skill'}
                    margin={config.chart.margin}
                    colors={{ scheme: 'nivo' }}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    keys={['cantidad']}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Cantidad de Skill en ofertas laborales',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    padding={0.2}
                    layout="horizontal"
                    enableGridY={false}
                    enableGridX={true}
                    legends={config.chart.legends}

                />
            </div>
        );
    }
}

CompGraficoBarraHorizontal.propTypes = {
    data: PropTypes.array
};

export default CompGraficoBarraHorizontal;
