/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import ExampleLineChart1 from '../components/ExampleLineChart1';
import React, { PropsWithChildren } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { scss, useStyles } from './Page1.styles';

/**
 * Properties for <Page1 /> component.
 */
export interface IPage1Props {
}

const chartData = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100
    }
];

const Page1 = (props: PropsWithChildren<IPage1Props>) => {
    const classes = useStyles();

    const { t } = useTranslation();

    return (
        <div className={scss['Page1']}>
            <Typography variant="h3" color="inherit" className={classes.pageTitle}>
                {t('page1.title')}
            </Typography>

            <ExampleLineChart1 data={chartData} />
        </div>
    );
};

/**
 * Page 1 component.
 */
export default Page1;
