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
import { IRickAndMortyCharacter } from '../../graphql/rickAndMorty';

/**
 * Props for <RickAndMortyListItem /> component.
 */
export interface IRickAndMortyListItemProps {
    /**
     * The underlying character object.
     */
    character: IRickAndMortyCharacter;
}

const RickAndMortyListItem = (props: PropsWithChildren<IRickAndMortyListItemProps>) => {
    return (
        <ListItem key={`${props.character.id}`}>
            <ListItemAvatar>
                <Avatar
                    alt={`${props.character.name}}`}
                    src={props.character.image}
                />
            </ListItemAvatar>

            <ListItemText
                primary={`${props.character.name}`}
                secondary={`${props.character.species} (${props.character.gender}); ${props.character.location.name}`}
            />
        </ListItem>
    );
};

RickAndMortyListItem.propTypes = {
    character: PropTypes.object.isRequired
};

/**
 * The component for an item of a Rick and Morty character.
 */
export default RickAndMortyListItem;
