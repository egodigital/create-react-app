/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RickAndMortyListItem from '.';
import { ListItem } from '@material-ui/core';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import { IRickAndMortyCharacter } from '../../graphql/rickAndMorty';

configure({ adapter: new Adapter() });

describe('<RickAndMortyListItem /> component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const character: IRickAndMortyCharacter = {
            "id": "1",
            "name": "Rick Sanchez",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "location": {
                "name": "Earth (Replacement Dimension)",
                "dimension": "Replacement Dimension"
            },
            "species": "Human"
        };

        wrapper = shallow(<RickAndMortyListItem character={character} />);
    });

    it('should contain exact 1 <ListItem />', () => {
        expect(wrapper.find(ListItem)).toHaveLength(1);
    });
});
