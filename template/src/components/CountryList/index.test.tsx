/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Adapter from 'enzyme-adapter-react-16';
import CountryList from '.';
import CountryListItem from '../CountryListItem';
import React from 'react';
import { configure, shallow } from 'enzyme';
import { ICountry } from '../../graphql/countriesQL';

configure({ adapter: new Adapter() });

describe('<CountryList /> component', () => {
    it('should contain exact number of <CountryListItem /> based on input array', () => {
        for (let i = 1; i <= 10; i++) {
            const countries: ICountry[] = [];
            for (let j = 0; j < i; j++) {
                countries.push({
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
                });
            }

            const wrapper = shallow(<CountryList items={countries} />);
            expect(wrapper.find(CountryListItem)).toHaveLength(i);
        }
    });
});
