import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'
import config from './config.json';

class CompTestChart extends Component {
    render() {
        return (
            <div className="grafico">
                <ResponsiveLine
                    data={[
                        {
                            id: 'fake corp. A',
                            data: [
                                { x: '2018-01-31', y: 7 },
                                { x: '2018-02-28', y: 5 },
                                { x: '2018-03-31', y: 11 },
                                { x: '2018-04-30', y: 9 },
                                { x: '2018-05-31', y: 12 },
                                { x: '2018-06-30', y: 16 },
                                { x: '2018-07-31', y: 13 },
                                { x: '2018-08-31', y: 13 },
                            ],
                        },
                        {
                            id: 'fake corp. B',
                            data: [
                                { x: '2018-04-30', y: 14 },
                                { x: '2018-05-31', y: 14 },
                                { x: '2018-06-30', y: 15 },
                                { x: '2018-07-31', y: 11 },
                                { x: '2018-08-31', y: 10 },
                                { x: '2018-09-30', y: 12 },
                                { x: '2018-10-31', y: 9 },
                                { x: '2018-11-30', y: 7 },
                            ],
                        },
                    ]}
                    xScale={{
                        type: 'time',
                        format: '%Y-%m-%d',
                        precision: 'day',
                    }}
                    xFormat="time:%Y-%m-%d"
                    yScale={{
                        type: 'linear',
                        stacked: false,
                        "min": "auto",
                        "max": "auto"
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Cantidad de ofertas que lo requieren",
                        "legendOffset": -40,
                        "legendPosition": "middle"
                    }}
                    axisBottom={{
                        format: '%b %Y',
                        tickValues: 'every month',
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Mes Año",
                        "legendOffset": 36,
                        "legendPosition": "middle"
                    }}
                    pointSize={config.chart.pointSize}
                    pointBorderWidth={config.chart.pointBorderWidth}
                    pointBorderColor={config.chart.pointBorderColor}
                    useMesh={config.chart.useMesh}
                    margin={config.chart.margin}
                    legends={config.chart.legens}
                    enableSlices="x"
                />
            </div>
        );
    }
}

export default CompTestChart;