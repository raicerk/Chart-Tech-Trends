import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import config from '../config.json';
import PropTypes from 'prop-types';

const CompGraficoBarra = ({ data }) => {
  return (
    <div className="grafico">
        <ResponsiveBar
            data={data}
            margin={config.chart.margin}
            indexBy="skill"
            keys={[ 'salariominimo', 'media', 'salariomaximo' ]}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'skill',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Salario en USD ',
                legendPosition: 'middle',
                legendOffset: -50
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={config.chart.legends}
            // groupMode="grouped"
        />
    </div>
  )
}

CompGraficoBarra.propTypes = {
    data: PropTypes.array
};

export default CompGraficoBarra;
