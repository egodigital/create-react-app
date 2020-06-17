/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import ExampleLineChart1 from '../../components/ExampleLineChart1';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { scss, useStyles } from './index.styles';

/**
 * Properties for <Page1 /> component.
 */
export interface IPage1Props {
}

function createRandomData(): any[] {
    const A = 'A'.charCodeAt(0);

    const randData = [];

    for (let i = 0; i < 7; i++) {
        const letter = String.fromCharCode(A + i);

        randData.push({
            name: 'Page ' + letter,
            uv: Math.floor(Math.random() * 10000),
            pv: Math.floor(Math.random() * 10000),
            amt: Math.floor(Math.random() * 10000)
        });
    }

    return randData;
}

const Page1 = (props: PropsWithChildren<IPage1Props>) => {
    const [data, setData] = useState(createRandomData());

    const classes = useStyles();

    const { t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => {
            setData(createRandomData());
        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={scss['Page1']}>
            <Typography variant="h3" color="inherit" className={classes.pageTitle}>
                {t('page1.title')}
            </Typography>

            <ExampleLineChart1
                className={scss['chart1']}
                style={{
                    marginTop: 32
                }}
                data={data} />
        </div>
    );
};

/**
 * Page 1 component.
 */
export default Page1;
