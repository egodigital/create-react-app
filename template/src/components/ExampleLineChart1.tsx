/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { Optional } from '@egodigital/types';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

/**
 * Props for <ExampleLineChart1 /> component.
 */
export interface IExampleLineChart1Props {
    /**
     * CSS class name.
     */
    className?: Optional<string>;
    /**
     * The data to display.
     */
    data: any[];
    /**
     * Custom styles.
     */
    style?: Optional<object>;
}

const ExampleLineChart1 = (props: PropsWithChildren<IExampleLineChart1Props>) => {
    return (
        <LineChart
            className={props.className}
            style={props.style}
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
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
    style: PropTypes.object,
};

/**
 * The example line chart component #1.
 */
export default ExampleLineChart1;
