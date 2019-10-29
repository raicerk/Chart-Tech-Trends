import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import config from '../config.json';
import PropTypes from 'prop-types';

const CompGraficoPie = ({ data }) => {
  return (
    <div className="grafico">
        <ResponsivePie
            data={data}
            margin={config.chart.margin}
            sortByValue={true}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'category10' }}
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
            legends={config.chart.legens}
        />
    </div>
  );
}

CompGraficoPie.propTypes = {
    data: PropTypes.array
};

export default CompGraficoPie;
