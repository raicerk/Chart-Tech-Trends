import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import config from '../config.json';
import PropTypes from 'prop-types';

const CompGraficos = ({ data }) => {
  return (
    <div className="grafico">
        <ResponsiveLine
            data={ data }
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
            pointLabelYOffset={ config.chart.pointLabelYOffset }
            useMesh={ config.chart.useMesh }
            legends={ config.chart.legens }
            xFormat="time:%Y-%m-%d"
            enableSlices="x"
            pointLabel="y"
        />
    </div>
  );
}

CompGraficos.propTypes = {
    data: PropTypes.array
};

export default CompGraficos;
