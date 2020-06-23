/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren, useEffect, useState } from 'react';
import RickAndMortyList from '../../components/RickAndMortyList';
import * as queries from '../../graphql/rickAndMorty/queries';
import { useQuery } from '@apollo/react-hooks';
import { Nilable } from '@egodigital/types';
import { CircularProgress, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { scss, useStyles } from './index.styles';
import { IRickAndMortyCharacter } from '../../graphql/rickAndMorty';

/**
 * Properties for <Page3 /> component.
 */
export interface IPage3Props {
}

const Page3 = (props: PropsWithChildren<IPage3Props>) => {
    const [characters, setCharacters] = useState<Nilable<IRickAndMortyCharacter[]>>(null);

    const classes = useStyles();
    const { t } = useTranslation();
    const { data, error, loading } = useQuery(queries.FETCH_CHARACTERS_QUERY);

    useEffect(() => {
        setCharacters(data?.characters?.results);
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
        } else if (characters) {
            if (characters.length) {
                list = <RickAndMortyList items={characters} />;
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
