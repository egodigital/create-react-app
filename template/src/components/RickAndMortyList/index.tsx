/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import PropTypes from 'prop-types';
import React, { PropsWithChildren } from 'react';
import RickAndMortyListItem from '../RickAndMortyListItem';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IRickAndMortyCharacter } from '../../graphql/rickAndMorty';

/**
 * Props for <RickAndMortyList /> component.
 */
export interface IRickAndMortyListProps {
    /**
     * The list of items.
     */
    items: IRickAndMortyCharacter[];
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

const RickAndMortyList = (props: PropsWithChildren<IRickAndMortyListProps>) => {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {props.items.map(character => {
                return (
                    <RickAndMortyListItem
                        character={character}
                        key={`${character.id}`}
                    />
                );
            })}
        </List>
    );
};

RickAndMortyList.propTypes = {
    items: PropTypes.array.isRequired
};

/**
 * The Rick and Morty character list component.
 */
export default RickAndMortyList;
