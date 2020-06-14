/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RandomUserList from './RandomUserList';
import RandomUserListItem, { IRandomUser } from './RandomUserListItem';

configure({ adapter: new Adapter() });

describe('<RandomUserList /> component', () => {
    it('should contain exact number of <RandomUserListItem /> based on input array', () => {
        for (let i = 1; i <= 10; i++) {
            const users: IRandomUser[] = [];
            for (let j = 0; j < i; j++) {
                users.push({
                    "gender": "female",
                    "name": {
                        "title": "Miss",
                        "first": "Galina",
                        "last": "Pietzsch"
                    },
                    "location": {
                        "street": {
                            "number": 4042,
                            "name": "Bahnhofstraße"
                        },
                        "city": "Neustadt an der Weinstraße",
                        "state": "Bayern",
                        "country": "Germany",
                        "postcode": 31734,
                        "coordinates": {
                            "latitude": "60.0094",
                            "longitude": "166.0484"
                        },
                        "timezone": {
                            "offset": "-8:00",
                            "description": "Pacific Time (US & Canada)"
                        }
                    },
                    "email": "galina.pietzsch@example.com",
                    "login": {
                        "uuid": "5a326191-39fe-4524-ba98-4e0dff7dae31",
                        "username": "orangefrog924",
                        "password": "mermaid",
                        "salt": "L83tjsCP",
                        "md5": "33b368667200b8b6401921d5bc1e7a67",
                        "sha1": "dd5bbed3f3a7258029ad6cd81af630f8bfb01cc8",
                        "sha256": "32953af3afd198f5a79b054f72c5e8e2a76e9c444dc15722b969d45562349922"
                    },
                    "dob": {
                        "date": "1947-06-10T06:12:16.715Z",
                        "age": 73
                    },
                    "registered": {
                        "date": "2017-02-02T21:04:23.110Z",
                        "age": 3
                    },
                    "phone": "0948-6921928",
                    "cell": "0176-1570477",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/96.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
                    },
                    "nat": "DE"
                });
            }

            const wrapper = shallow(<RandomUserList items={users} />);
            expect(wrapper.find(RandomUserListItem)).toHaveLength(i);
        }
    });
});
