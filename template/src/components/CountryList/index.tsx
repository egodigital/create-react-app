/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import CountryListItem from '../CountryListItem';
import PropTypes from 'prop-types';
import React, { PropsWithChildren } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ICountry } from '../../graphql/countriesQL';

/**
 * Props for <CountryList /> component.
 */
export interface ICountryListProps {
    /**
     * The list of items.
     */
    items: ICountry[];
}

const useStyles = makeStyles(theme => {
    return {
        list: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            maxWidth: 512,
            backgroundColor: theme.palette.background.paper
        }
    };
});

const CountryList = (props: PropsWithChildren<ICountryListProps>) => {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {props.items.map(country => {
                return (
                    <CountryListItem
                        country={country}
                        key={`${country._id}`}
                    />
                );
            })}
        </List>
    );
};

CountryList.propTypes = {
    items: PropTypes.array.isRequired
};

/**
 * The country list component.
 */
export default CountryList;
