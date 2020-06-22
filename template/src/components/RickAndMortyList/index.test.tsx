/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RickAndMortyList from '.';
import RickAndMortyListItem from '../RickAndMortyList';
import { configure, shallow } from 'enzyme';
import { IRickAndMortyCharacter } from '../../graphql/rickAndMorty';

configure({ adapter: new Adapter() });

describe('<RickAndMortyList /> component', () => {
    it('should contain exact number of <RickAndMortyListItem /> based on input array', () => {
        for (let i = 1; i <= 10; i++) {
            const characters: IRickAndMortyCharacter[] = [];
            for (let j = 0; j < i; j++) {
                characters.push({
                    "id": "1",
                    "name": "Rick Sanchez",
                    "gender": "Male",
                    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                    "location": {
                        "name": "Earth (Replacement Dimension)",
                        "dimension": "Replacement Dimension"
                    },
                    "species": "Human"
                });
            }

            const wrapper = shallow(<RickAndMortyList items={characters} />);
            expect(wrapper.find(RickAndMortyListItem)).toHaveLength(i);
        }
    });
});
