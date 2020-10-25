import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const CompGraficoBarraHorizontalTest = ({ data }) => {
  return (
    <div className="grafico">
        <ResponsiveBar
            data={data}
            indexBy={'skill'}
            margin={{
              "top": 50,
              "right": 10,
              "bottom": 50,
              "left": 70
          }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            keys={[ 'salariominimo', 'media', 'salariomaximo' ]}
            axisBottom={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 0,
              tickRotation: 0,
              legendOffset: 50
            }}
            padding={0.2}
            layout="horizontal"
            enableGridY={false}
            enableGridX={true}
            legends={[
              {
                  "dataFrom": "keys",
                  "anchor": "bottom",
                  "direction": "row",
                  "justify": false,
                  "translateX": 0,
                  "translateY": 50,
                  "itemsSpacing": 2,
                  "itemDirection": "left-to-right",
                  "itemWidth": 100,
                  "itemHeight": 20,
                  "itemOpacity": 0.75,
                  "symbolSize": 12,
                  "symbolShape": "circle",
                  "symbolBorderColor": "rgba(0,0,0, .5)",
                  "effects": [
                      {
                          "on": "hover",
                          "style": {
                              "itemBackground": "rgba(0,0,0, .03)",
                              "itemOpacity": 1
                          }
                      }
                  ]
              }
          ]}

        />
    </div>
  );
}

CompGraficoBarraHorizontalTest.propTypes = {
    data: PropTypes.array
};

export default CompGraficoBarraHorizontalTest;
