/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { ICountry } from '../../graphql/countriesQL';

/**
 * Props for <CountryListItem /> component.
 */
export interface ICountryListItemProps {
    /**
     * The underlying country object.
     */
    country: ICountry;
}

const CountryListItem = (props: PropsWithChildren<ICountryListItemProps>) => {
    return (
        <ListItem key={`${props.country._id}`}>
            <ListItemAvatar>
                <Avatar
                    alt={`${props.country.name}}`}
                    src={props.country.flag.svgFile}
                />
            </ListItemAvatar>

            <ListItemText
                primary={`${props.country.name}`}
                secondary={`${props.country.capital}`}
            />
        </ListItem>
    );
};

CountryListItem.propTypes = {
    country: PropTypes.object.isRequired
};

/**
 * The component for an item of a country.
 */
export default CountryListItem;
