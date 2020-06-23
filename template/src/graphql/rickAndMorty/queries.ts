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
export const FETCH_CHARACTERS_QUERY = gql`
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
