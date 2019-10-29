import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';
import config from '../config.json';
import PropTypes from 'prop-types';

class CompGraficoPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            other: ""
        };
    }

    render() {
        return (
            <div className="grafico">
                <ResponsivePie
                    data={this.props.data}
                    margin={config.chart.margin}
                    sortByValue={true}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={ config.chart.colors }
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    radialLabelsSkipAngle={5}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={7}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    tooltip={({ id, value }) => (
                        <label style={{ fontSize: '.8em' }}>
                            Lenguaje: {id} <br />
                            Cantidad: {value}
                        </label>
                    )}
                    legends={config.chart.legends}
                />
            </div>
        );
    }
}

CompGraficoPie.propTypes = {
    data: PropTypes.array
};

export default CompGraficoPie;
