/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Adapter from 'enzyme-adapter-react-16';
import ExampleLineChart1 from '.';
import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import { LineChart } from 'recharts';

configure({ adapter: new Adapter() });

describe('<ExampleLineChart1 /> component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<ExampleLineChart1 data={[]} />);
    });

    it('should contain exact 1 <LineChart />', () => {
        expect(wrapper.find(LineChart)).toHaveLength(1);
    });
});
