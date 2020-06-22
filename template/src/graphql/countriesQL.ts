/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import ApolloClient from 'apollo-boost';

/**
 * A country.
 */
export interface ICountry {
    '_id': string;
    capital: string;
    flag: {
        svgFile: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
    name: string;
}

const CountriesClient = new ApolloClient({
    uri: 'https://countries-274616.ew.r.appspot.com/'
});

// GraphQL client for country data
export default CountriesClient;
