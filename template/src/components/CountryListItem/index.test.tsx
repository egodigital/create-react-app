/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Adapter from 'enzyme-adapter-react-16';
import CountryListItem from '.';
import React from 'react';
import { ListItem } from '@material-ui/core';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import { ICountry } from '../../graphql/countriesQL';

configure({ adapter: new Adapter() });

describe('<CountryListItem /> component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const country: ICountry = {
            "_id": "1650",
            "name": "Germany",
            "capital": "Berlin",
            "location": {
                "longitude": 9,
                "latitude": 51
            },
            "flag": {
                "svgFile": "https://restcountries.eu/data/deu.svg"
            }
        };

        wrapper = shallow(<CountryListItem country={country} />);
    });

    it('should contain exact 1 <ListItem />', () => {
        expect(wrapper.find(ListItem)).toHaveLength(1);
    });
});
