/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import { gql } from 'apollo-boost';

/**
 * GraphQL query for fetching Rick & Morty characters.
 */
export const fetchCharacters = gql`
  query {
    characters {
      results {
        id
        name
        gender
        image
        location {
          name
          dimension
        }
        species
      }
    }
  }
`;
