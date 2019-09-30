import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'
import config from './config.json';
import PropTypes from 'prop-types';

class CompGraficos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            other: ""
        };
    }

    render() {
        console.log(this.props.pais)
        return (
            <div className="grafico">
                hola: 
                <ResponsiveLine
                    data={ this.props.data }
                    margin={ config.chart.margin }
                    xScale={ config.chart.xScale }
                    yScale={ config.chart.yScale }
                    axisTop={ null }
                    axisRight={ null }
                    axisBottom={ config.chart.axisBottom }
                    axisLeft={ config.chart.axisLeft }
                    colors={ config.chart.colors }
                    pointSize={ config.chart.pointSize }
                    pointColor={ config.chart.pointColor }
                    pointBorderWidth={ config.chart.pointBorderWidth }
                    pointBorderColor={ config.chart.pointBorderColor }
                    pointLabel="y"
                    pointLabelYOffset={ config.chart.pointLabelYOffset }
                    enableSlices="x"
                    useMesh={ config.chart.useMesh }
                    legends={ config.chart.legens }        
                />
            </div>
        );
    }
}

CompGraficos.propTypes = {
    data: PropTypes.array
};

export default CompGraficos;