/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import ApolloClient from 'apollo-boost';

/**
 * A Rick & Morty character.
 */
export interface IRickAndMortyCharacter {
    gender: string;
    id: string;
    image: string;
    location: {
        dimension: string;
        name: string;
    };
    name: string;
    species: string;
}

const RickAndMortyClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql'
});

// GraphQL client for Rick & Morty character data
export default RickAndMortyClient;
