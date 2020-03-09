import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {HorizontalBar} from 'react-chartjs-2';
import config from '../config.json';
import PropTypes from 'prop-types';

const CompGraficoBarraHorizontal = ({ data }) => {


  var result = new Map(data.map(i => [i.skill, i.cantidad]));

  //console.log(llaves)

  const datatita = {
    labels: [...result.keys()].map(i=> i),
    datasets: [
      {
        label: 'Skill',
        data: [...result.values()].map(i=> i)
      }
    ]
  };

  return (
    <div className="grafico">
        <HorizontalBar data={datatita} />
        {/* <ResponsiveBar
            data={data}
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

        /> */}
    </div>
  );
}

CompGraficoBarraHorizontal.propTypes = {
    data: PropTypes.array
};

export default CompGraficoBarraHorizontal;
