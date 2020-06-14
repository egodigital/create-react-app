/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export interface IExampleLineChart1Props {
    data: any[];
}

const ExampleLineChart1 = (props: PropsWithChildren<IExampleLineChart1Props>) => {
    return (
        <LineChart
            style={{
                marginTop: 32
            }}
            width={500}
            height={300}
            data={props.data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    );
};

ExampleLineChart1.propTypes = {
    data: PropTypes.array.isRequired
};

export default ExampleLineChart1;
