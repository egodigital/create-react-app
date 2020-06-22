/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import CountryList from '../../components/CountryList';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Nilable } from '@egodigital/types';
import { CircularProgress, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { gql } from 'apollo-boost';
import { useTranslation } from 'react-i18next';
import { scss, useStyles } from './index.styles';
import { ICountry } from '../../graphql/countriesQL';

/**
 * Properties for <Page1 /> component.
 */
export interface IPage3Props {
}

const query = gql`
  query {
	Country {
      name
      capital
      location {
        longitude,
        latitude
      }
      flag {
        svgFile
      }
    }
  }
`;

const Page3 = (props: PropsWithChildren<IPage3Props>) => {
    const [countries, setCountries] = useState<Nilable<ICountry[]>>(null);

    const classes = useStyles();
    const { t } = useTranslation();
    const { data, error, loading } = useQuery(query);

    useEffect(() => {
        if (data?.Country) {
            setCountries(data.Country);
        }

    }, [data]);

    useEffect(() => {
        // reloadStations();
    }, []);

    let list: Nilable;
    let spinner: Nilable;

    if (loading) {
        spinner = <CircularProgress />;
    } else {
        if (error) {
            list = <Alert severity="error">{error}</Alert>;
        } else if (countries) {
            if (countries.length) {
                list = <CountryList items={countries} />;
            } else {
                list = <Alert severity="warning">No stations found.</Alert>;
            }
        }
    }

    return (
        <div className={scss['Page3']}>
            <Typography variant="h3" color="inherit" className={classes.pageTitle}>
                {t('page3.title')}
            </Typography>

            {spinner}
            {list}
        </div>
    );
};

/**
 * Page 3 component.
 */
export default Page3;
